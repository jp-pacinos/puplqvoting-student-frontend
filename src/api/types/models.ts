export type PrimaryKey = number
export type ForeignKey = PrimaryKey
export type Description = string | null
export type BooleanNumeric = (1 | 0) | ('1' | '0')
export type Timestamp = string

export interface TimeStampFields {
  created_at: Timestamp
  updated_at: Timestamp
}

/**
 * positions table
 */
export declare namespace Position {
  export interface Fields extends TimeStampFields {
    id: PrimaryKey
    name: string
    order: number
    per_party_count: number
    choose_max_count: number
  }

  export type Fillable = Pick<
    Fields,
    'name' | 'order' | 'per_party_count' | 'choose_max_count'
  >
}

/**
 * user_students table
 */
export declare namespace Student {
  export type Gender = 'MALE' | 'FEMALE'
  export type Voter = BooleanNumeric

  export interface ForeignFileds {
    course_id: ForeignKey
  }

  export interface Fields extends ForeignFileds, TimeStampFields {
    id: PrimaryKey
    student_number: string
    firstname: string
    lastname: string
    middlename: string | null
    suffix: string | null
    sex: Gender
    can_vote: Voter
    birthdate: string
    email: string
  }

  export type Fillable = Omit<Fields, 'id' | 'created_at' | 'updated_at'>

  export interface withOfficials<F extends keyof Official.Fields> extends Fields {
    officials: Pick<Official.Fields, F>[]
  }
}

/**
 * officials table
 */
export declare namespace Official {
  export interface ForeignFileds {
    position_id: ForeignKey
    student_id: ForeignKey
    party_id: ForeignKey
  }

  export interface Appends {
    // display_picture_url: string | null
  }

  export interface Fields extends Appends, ForeignFileds, TimeStampFields {
    id: PrimaryKey
    display_picture: string | null
  }

  export type Fillable = Pick<
    Fields,
    'display_picture' | 'position_id' | 'student_id' | 'party_id'
  >

  export interface withStudent<F extends keyof Student.Fields> extends Fields {
    student: Pick<Student.Fields, F>
  }
}

/**
 * parties table
 */
export declare namespace Party {
  export interface ForeignFileds {
    session_id: ForeignKey
  }

  export interface Fields extends ForeignFileds, TimeStampFields {
    id: PrimaryKey
    name: string
    description: Description
  }

  export type Fillable = Pick<Fields, 'name' | 'description' | 'session_id'>

  export interface withOfficialsWithStudent<F extends keyof Student.Fields>
    extends Fields {
    officials: Official.withStudent<F>[]
  }
}
