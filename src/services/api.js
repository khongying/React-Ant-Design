import axios, { AxiosError, AxiosInstance } from "axios";

export enum AuthEnum {
  Auth = "AUTH"
}
export class HttpService {
  public static instance(baseUrl?: string): AxiosInstance {
    return axios.create({
      baseURL: baseUrl ? baseUrl : process.env.VUE_APP_API_URL,
      responseType: "json",
      headers: {
        Authorization: HttpService.getToken()
      }
    });
  }
  public static getToken() {
    try {
      const loginInfo: LoginInfo = JSON.parse(
        localStorage.getItem(AuthEnum.Auth) as string
      ) as LoginInfo;
      if (loginInfo) {
        return loginInfo.token;
      } else {
        return undefined;
      }
    } catch {
      return undefined;
    }
  }

  public static handleErrorAuthorization<T>(
    res: AxiosError<ResponseMessage<T>>
  ) {
    try {
      let { response } = res;
      let unauthorized = response?.status === 401;
      let data = response?.data;
      unauthorized = data?.meta.code === 50002 || unauthorized;
      if (unauthorized) {
        console.log("DEBUG: data.token", data?.meta);
        localStorage.removeItem(AuthEnum.Auth);
        alert("session time out");
        window.location.href = "/";
      }
    } catch (e) {
      console.error("DEBUG: handleErrorAuthorization ", e.message);
      throw e;
    }
  }

  public static setQueryStringByJson<T>(queryParam: T): string {
    let param = "";
    if (queryParam) {
      param =
        "?" +
        Object.entries(queryParam)
          .map(key => {
            return (
              encodeURIComponent(key[0]) +
              "=" +
              encodeURIComponent(String(key[1])) +
              "&"
            );
          })
          .join("");
    }
    return param;
  }

  public static async Authorization(): Promise<boolean> {
    try {
      return !!(await HttpService.getToken());
    } catch {
      return false;
    }
  }
}
