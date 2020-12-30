import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Models } from 'api/types'

export declare namespace Response {
  export type Position = Pick<
    Models.Position.Fields,
    'id' | 'name' | 'order' | 'choose_max_count'
  > & { keyName: string }

  export type Party = Pick<Models.Party.Fields, 'id' | 'name'>

  export type Candidate = Pick<
    Models.Official.Fields,
    'id' | 'party_id' | 'position_id' | 'display_picture'
  > &
    Pick<Models.Student.Fields, 'lastname' | 'firstname' | 'middlename' | 'suffix'>

  export type VerificationType = 'open' | 'code' | 'email'

  export namespace Success {
    export interface getActiveSession {
      positions: Position[]
      parties: Party[]
      candidates: Candidate[]
    }

    export interface storeUserVote {
      message: string
      history_id: number
      verification_type: VerificationType
      resultLink: string
    }

    export interface sendCode {
      message: string
      resultLink: string
    }
  }

  export namespace Fail {
    export interface getActiveSession extends AxiosError<{ message: string }> {}
    export interface storeUserVote extends AxiosError<{ message: string }> {}
    export interface sendCode extends AxiosError<{ message: string }> {}
  }
}

export declare namespace Function {
  /**
   * function parameters
   */

  export interface storeUserVoteParam {
    votes: {
      [positionKey: string]: number[] | string[]
    }
  }

  export interface sendCodeParam {
    historyId: number
    code: string
  }

  /**
   * api functions
   */

  export interface getActiveSession {
    (options?: AxiosRequestConfig): Promise<
      AxiosResponse<Response.Success.getActiveSession>
    >
  }

  export interface storeUserVote {
    (data: storeUserVoteParam): Promise<AxiosResponse<Response.Success.storeUserVote>>
  }

  export interface sendCode {
    (data: sendCodeParam): Promise<AxiosResponse<Response.Success.sendCode>>
  }
}
