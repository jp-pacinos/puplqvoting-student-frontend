import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export declare namespace Response {
  export namespace Success {
    export interface login {
      message: string
      token: string
    }
  }

  export namespace Fail {
    export interface login extends AxiosError<{ message: string }> {}
  }
}

export declare namespace Function {
  export interface loginParams {
    user: {
      student_number: string
      firstname: string
      lastname: string
      birthdate: string
    }
    options?: AxiosRequestConfig
  }

  export interface login {
    (params: loginParams): Promise<AxiosResponse<Response.Success.login>>
  }
}
