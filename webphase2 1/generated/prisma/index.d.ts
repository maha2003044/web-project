
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Prerequisite
 * 
 */
export type Prerequisite = $Result.DefaultSelection<Prisma.$PrerequisitePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CompletedCourse
 * 
 */
export type CompletedCourse = $Result.DefaultSelection<Prisma.$CompletedCoursePayload>
/**
 * Model InstructorInterest
 * 
 */
export type InstructorInterest = $Result.DefaultSelection<Prisma.$InstructorInterestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prerequisite`: Exposes CRUD operations for the **Prerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prerequisites
    * const prerequisites = await prisma.prerequisite.findMany()
    * ```
    */
  get prerequisite(): Prisma.PrerequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedCourse`: Exposes CRUD operations for the **CompletedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedCourses
    * const completedCourses = await prisma.completedCourse.findMany()
    * ```
    */
  get completedCourse(): Prisma.CompletedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorInterest`: Exposes CRUD operations for the **InstructorInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorInterests
    * const instructorInterests = await prisma.instructorInterest.findMany()
    * ```
    */
  get instructorInterest(): Prisma.InstructorInterestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Course: 'Course',
    Prerequisite: 'Prerequisite',
    Class: 'Class',
    User: 'User',
    CompletedCourse: 'CompletedCourse',
    InstructorInterest: 'InstructorInterest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "course" | "prerequisite" | "class" | "user" | "completedCourse" | "instructorInterest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Prerequisite: {
        payload: Prisma.$PrerequisitePayload<ExtArgs>
        fields: Prisma.PrerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findFirst: {
            args: Prisma.PrerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findMany: {
            args: Prisma.PrerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          create: {
            args: Prisma.PrerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          createMany: {
            args: Prisma.PrerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrerequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          delete: {
            args: Prisma.PrerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          update: {
            args: Prisma.PrerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          deleteMany: {
            args: Prisma.PrerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrerequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          upsert: {
            args: Prisma.PrerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          aggregate: {
            args: Prisma.PrerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrerequisite>
          }
          groupBy: {
            args: Prisma.PrerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CompletedCourse: {
        payload: Prisma.$CompletedCoursePayload<ExtArgs>
        fields: Prisma.CompletedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findFirst: {
            args: Prisma.CompletedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findMany: {
            args: Prisma.CompletedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          create: {
            args: Prisma.CompletedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          createMany: {
            args: Prisma.CompletedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          delete: {
            args: Prisma.CompletedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          update: {
            args: Prisma.CompletedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          deleteMany: {
            args: Prisma.CompletedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          upsert: {
            args: Prisma.CompletedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          aggregate: {
            args: Prisma.CompletedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedCourse>
          }
          groupBy: {
            args: Prisma.CompletedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseCountAggregateOutputType> | number
          }
        }
      }
      InstructorInterest: {
        payload: Prisma.$InstructorInterestPayload<ExtArgs>
        fields: Prisma.InstructorInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>
          }
          findFirst: {
            args: Prisma.InstructorInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>
          }
          findMany: {
            args: Prisma.InstructorInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>[]
          }
          create: {
            args: Prisma.InstructorInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>
          }
          createMany: {
            args: Prisma.InstructorInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorInterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>[]
          }
          delete: {
            args: Prisma.InstructorInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>
          }
          update: {
            args: Prisma.InstructorInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>
          }
          deleteMany: {
            args: Prisma.InstructorInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorInterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>[]
          }
          upsert: {
            args: Prisma.InstructorInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorInterestPayload>
          }
          aggregate: {
            args: Prisma.InstructorInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorInterest>
          }
          groupBy: {
            args: Prisma.InstructorInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorInterestCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorInterestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    course?: CourseOmit
    prerequisite?: PrerequisiteOmit
    class?: ClassOmit
    user?: UserOmit
    completedCourse?: CompletedCourseOmit
    instructorInterest?: InstructorInterestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    classes: number
    prerequisites: number
    interests: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | CourseCountOutputTypeCountClassesArgs
    prerequisites?: boolean | CourseCountOutputTypeCountPrerequisitesArgs
    interests?: boolean | CourseCountOutputTypeCountInterestsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorInterestWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    completedGrades: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedGrades?: boolean | UserCountOutputTypeCountCompletedGradesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletedGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    cname: string | null
    category: string | null
    isPublished: boolean | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    cname: string | null
    category: string | null
    isPublished: boolean | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    cname: number
    category: number
    isPublished: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    cname?: true
    category?: true
    isPublished?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    cname?: true
    category?: true
    isPublished?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    cname?: true
    category?: true
    isPublished?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    cname: string
    category: string
    isPublished: boolean
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cname?: boolean
    category?: boolean
    isPublished?: boolean
    classes?: boolean | Course$classesArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    interests?: boolean | Course$interestsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cname?: boolean
    category?: boolean
    isPublished?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cname?: boolean
    category?: boolean
    isPublished?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    cname?: boolean
    category?: boolean
    isPublished?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cname" | "category" | "isPublished", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Course$classesArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    interests?: boolean | Course$interestsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
      prerequisites: Prisma.$PrerequisitePayload<ExtArgs>[]
      interests: Prisma.$InstructorInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cname: string
      category: string
      isPublished: boolean
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Course$classesArgs<ExtArgs> = {}>(args?: Subset<T, Course$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisites<T extends Course$prerequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends Course$interestsArgs<ExtArgs> = {}>(args?: Subset<T, Course$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly cname: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
    readonly isPublished: FieldRef<"Course", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.classes
   */
  export type Course$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Course.prerequisites
   */
  export type Course$prerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.interests
   */
  export type Course$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    where?: InstructorInterestWhereInput
    orderBy?: InstructorInterestOrderByWithRelationInput | InstructorInterestOrderByWithRelationInput[]
    cursor?: InstructorInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorInterestScalarFieldEnum | InstructorInterestScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Prerequisite
   */

  export type AggregatePrerequisite = {
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  export type PrerequisiteAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type PrerequisiteSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type PrerequisiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    courseId: number | null
  }

  export type PrerequisiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    courseId: number | null
  }

  export type PrerequisiteCountAggregateOutputType = {
    id: number
    name: number
    courseId: number
    _all: number
  }


  export type PrerequisiteAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type PrerequisiteSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type PrerequisiteMinAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
  }

  export type PrerequisiteMaxAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
  }

  export type PrerequisiteCountAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    _all?: true
  }

  export type PrerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisite to aggregate.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prerequisites
    **/
    _count?: true | PrerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrerequisiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrerequisiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type GetPrerequisiteAggregateType<T extends PrerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePrerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrerequisite[P]>
      : GetScalarType<T[P], AggregatePrerequisite[P]>
  }




  export type PrerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithAggregationInput | PrerequisiteOrderByWithAggregationInput[]
    by: PrerequisiteScalarFieldEnum[] | PrerequisiteScalarFieldEnum
    having?: PrerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrerequisiteCountAggregateInputType | true
    _avg?: PrerequisiteAvgAggregateInputType
    _sum?: PrerequisiteSumAggregateInputType
    _min?: PrerequisiteMinAggregateInputType
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type PrerequisiteGroupByOutputType = {
    id: number
    name: string
    courseId: number
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  type GetPrerequisiteGroupByPayload<T extends PrerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type PrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectScalar = {
    id?: boolean
    name?: boolean
    courseId?: boolean
  }

  export type PrerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "courseId", ExtArgs["result"]["prerequisite"]>
  export type PrerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $PrerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prerequisite"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      courseId: number
    }, ExtArgs["result"]["prerequisite"]>
    composites: {}
  }

  type PrerequisiteGetPayload<S extends boolean | null | undefined | PrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$PrerequisitePayload, S>

  type PrerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrerequisiteCountAggregateInputType | true
    }

  export interface PrerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prerequisite'], meta: { name: 'Prerequisite' } }
    /**
     * Find zero or one Prerequisite that matches the filter.
     * @param {PrerequisiteFindUniqueArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrerequisiteFindUniqueArgs>(args: SelectSubset<T, PrerequisiteFindUniqueArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrerequisiteFindUniqueOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PrerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrerequisiteFindFirstArgs>(args?: SelectSubset<T, PrerequisiteFindFirstArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PrerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany()
     * 
     * // Get first 10 Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrerequisiteFindManyArgs>(args?: SelectSubset<T, PrerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prerequisite.
     * @param {PrerequisiteCreateArgs} args - Arguments to create a Prerequisite.
     * @example
     * // Create one Prerequisite
     * const Prerequisite = await prisma.prerequisite.create({
     *   data: {
     *     // ... data to create a Prerequisite
     *   }
     * })
     * 
     */
    create<T extends PrerequisiteCreateArgs>(args: SelectSubset<T, PrerequisiteCreateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prerequisites.
     * @param {PrerequisiteCreateManyArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrerequisiteCreateManyArgs>(args?: SelectSubset<T, PrerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prerequisites and returns the data saved in the database.
     * @param {PrerequisiteCreateManyAndReturnArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrerequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, PrerequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prerequisite.
     * @param {PrerequisiteDeleteArgs} args - Arguments to delete one Prerequisite.
     * @example
     * // Delete one Prerequisite
     * const Prerequisite = await prisma.prerequisite.delete({
     *   where: {
     *     // ... filter to delete one Prerequisite
     *   }
     * })
     * 
     */
    delete<T extends PrerequisiteDeleteArgs>(args: SelectSubset<T, PrerequisiteDeleteArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prerequisite.
     * @param {PrerequisiteUpdateArgs} args - Arguments to update one Prerequisite.
     * @example
     * // Update one Prerequisite
     * const prerequisite = await prisma.prerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrerequisiteUpdateArgs>(args: SelectSubset<T, PrerequisiteUpdateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prerequisites.
     * @param {PrerequisiteDeleteManyArgs} args - Arguments to filter Prerequisites to delete.
     * @example
     * // Delete a few Prerequisites
     * const { count } = await prisma.prerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrerequisiteDeleteManyArgs>(args?: SelectSubset<T, PrerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrerequisiteUpdateManyArgs>(args: SelectSubset<T, PrerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites and returns the data updated in the database.
     * @param {PrerequisiteUpdateManyAndReturnArgs} args - Arguments to update many Prerequisites.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrerequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, PrerequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prerequisite.
     * @param {PrerequisiteUpsertArgs} args - Arguments to update or create a Prerequisite.
     * @example
     * // Update or create a Prerequisite
     * const prerequisite = await prisma.prerequisite.upsert({
     *   create: {
     *     // ... data to create a Prerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prerequisite we want to update
     *   }
     * })
     */
    upsert<T extends PrerequisiteUpsertArgs>(args: SelectSubset<T, PrerequisiteUpsertArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteCountArgs} args - Arguments to filter Prerequisites to count.
     * @example
     * // Count the number of Prerequisites
     * const count = await prisma.prerequisite.count({
     *   where: {
     *     // ... the filter for the Prerequisites we want to count
     *   }
     * })
    **/
    count<T extends PrerequisiteCountArgs>(
      args?: Subset<T, PrerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrerequisiteAggregateArgs>(args: Subset<T, PrerequisiteAggregateArgs>): Prisma.PrismaPromise<GetPrerequisiteAggregateType<T>>

    /**
     * Group by Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: PrerequisiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prerequisite model
   */
  readonly fields: PrerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prerequisite model
   */
  interface PrerequisiteFieldRefs {
    readonly id: FieldRef<"Prerequisite", 'Int'>
    readonly name: FieldRef<"Prerequisite", 'String'>
    readonly courseId: FieldRef<"Prerequisite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prerequisite findUnique
   */
  export type PrerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findUniqueOrThrow
   */
  export type PrerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findFirst
   */
  export type PrerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findFirstOrThrow
   */
  export type PrerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findMany
   */
  export type PrerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisites to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite create
   */
  export type PrerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Prerequisite.
     */
    data: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
  }

  /**
   * Prerequisite createMany
   */
  export type PrerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
  }

  /**
   * Prerequisite createManyAndReturn
   */
  export type PrerequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite update
   */
  export type PrerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Prerequisite.
     */
    data: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
    /**
     * Choose, which Prerequisite to update.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite updateMany
   */
  export type PrerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
  }

  /**
   * Prerequisite updateManyAndReturn
   */
  export type PrerequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite upsert
   */
  export type PrerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Prerequisite to update in case it exists.
     */
    where: PrerequisiteWhereUniqueInput
    /**
     * In case the Prerequisite found by the `where` argument doesn't exist, create a new Prerequisite with this data.
     */
    create: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
    /**
     * In case the Prerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
  }

  /**
   * Prerequisite delete
   */
  export type PrerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter which Prerequisite to delete.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite deleteMany
   */
  export type PrerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisites to delete
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to delete.
     */
    limit?: number
  }

  /**
   * Prerequisite without action
   */
  export type PrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
    limit: number | null
    enrolled: number | null
    courseId: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
    limit: number | null
    enrolled: number | null
    courseId: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    instructor: string | null
    limit: number | null
    enrolled: number | null
    status: string | null
    schedule: string | null
    courseId: number | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    instructor: string | null
    limit: number | null
    enrolled: number | null
    status: string | null
    schedule: string | null
    courseId: number | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    instructor: number
    limit: number
    enrolled: number
    status: number
    schedule: number
    courseId: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
    limit?: true
    enrolled?: true
    courseId?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
    limit?: true
    enrolled?: true
    courseId?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    instructor?: true
    limit?: true
    enrolled?: true
    status?: true
    schedule?: true
    courseId?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    instructor?: true
    limit?: true
    enrolled?: true
    status?: true
    schedule?: true
    courseId?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    instructor?: true
    limit?: true
    enrolled?: true
    status?: true
    schedule?: true
    courseId?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: number
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
    courseId: number
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor?: boolean
    limit?: boolean
    enrolled?: boolean
    status?: boolean
    schedule?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor?: boolean
    limit?: boolean
    enrolled?: boolean
    status?: boolean
    schedule?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor?: boolean
    limit?: boolean
    enrolled?: boolean
    status?: boolean
    schedule?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    instructor?: boolean
    limit?: boolean
    enrolled?: boolean
    status?: boolean
    schedule?: boolean
    courseId?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructor" | "limit" | "enrolled" | "status" | "schedule" | "courseId", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructor: string
      limit: number
      enrolled: number
      status: string
      schedule: string
      courseId: number
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly instructor: FieldRef<"Class", 'String'>
    readonly limit: FieldRef<"Class", 'Int'>
    readonly enrolled: FieldRef<"Class", 'Int'>
    readonly status: FieldRef<"Class", 'String'>
    readonly schedule: FieldRef<"Class", 'String'>
    readonly courseId: FieldRef<"Class", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    name: string | null
    studentId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    name: string | null
    studentId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    name: number
    studentId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    studentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    studentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    studentId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    name: string
    studentId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    studentId?: boolean
    completedGrades?: boolean | User$completedGradesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    studentId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    studentId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    studentId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "name" | "studentId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedGrades?: boolean | User$completedGradesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      completedGrades: Prisma.$CompletedCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
      name: string
      studentId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completedGrades<T extends User$completedGradesArgs<ExtArgs> = {}>(args?: Subset<T, User$completedGradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly studentId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.completedGrades
   */
  export type User$completedGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CompletedCourse
   */

  export type AggregateCompletedCourse = {
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  export type CompletedCourseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CompletedCourseSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CompletedCourseMinAggregateOutputType = {
    id: number | null
    course: string | null
    grade: string | null
    userId: number | null
  }

  export type CompletedCourseMaxAggregateOutputType = {
    id: number | null
    course: string | null
    grade: string | null
    userId: number | null
  }

  export type CompletedCourseCountAggregateOutputType = {
    id: number
    course: number
    grade: number
    userId: number
    _all: number
  }


  export type CompletedCourseAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CompletedCourseSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CompletedCourseMinAggregateInputType = {
    id?: true
    course?: true
    grade?: true
    userId?: true
  }

  export type CompletedCourseMaxAggregateInputType = {
    id?: true
    course?: true
    grade?: true
    userId?: true
  }

  export type CompletedCourseCountAggregateInputType = {
    id?: true
    course?: true
    grade?: true
    userId?: true
    _all?: true
  }

  export type CompletedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourse to aggregate.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedCourses
    **/
    _count?: true | CompletedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type GetCompletedCourseAggregateType<T extends CompletedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedCourse[P]>
      : GetScalarType<T[P], AggregateCompletedCourse[P]>
  }




  export type CompletedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithAggregationInput | CompletedCourseOrderByWithAggregationInput[]
    by: CompletedCourseScalarFieldEnum[] | CompletedCourseScalarFieldEnum
    having?: CompletedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedCourseCountAggregateInputType | true
    _avg?: CompletedCourseAvgAggregateInputType
    _sum?: CompletedCourseSumAggregateInputType
    _min?: CompletedCourseMinAggregateInputType
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type CompletedCourseGroupByOutputType = {
    id: number
    course: string
    grade: string
    userId: number
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  type GetCompletedCourseGroupByPayload<T extends CompletedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
        }
      >
    >


  export type CompletedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    grade?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    grade?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    grade?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectScalar = {
    id?: boolean
    course?: boolean
    grade?: boolean
    userId?: boolean
  }

  export type CompletedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course" | "grade" | "userId", ExtArgs["result"]["completedCourse"]>
  export type CompletedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompletedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedCourse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course: string
      grade: string
      userId: number
    }, ExtArgs["result"]["completedCourse"]>
    composites: {}
  }

  type CompletedCourseGetPayload<S extends boolean | null | undefined | CompletedCourseDefaultArgs> = $Result.GetResult<Prisma.$CompletedCoursePayload, S>

  type CompletedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedCourseCountAggregateInputType | true
    }

  export interface CompletedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedCourse'], meta: { name: 'CompletedCourse' } }
    /**
     * Find zero or one CompletedCourse that matches the filter.
     * @param {CompletedCourseFindUniqueArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedCourseFindUniqueArgs>(args: SelectSubset<T, CompletedCourseFindUniqueArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedCourseFindUniqueOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedCourseFindFirstArgs>(args?: SelectSubset<T, CompletedCourseFindFirstArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany()
     * 
     * // Get first 10 CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedCourseFindManyArgs>(args?: SelectSubset<T, CompletedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedCourse.
     * @param {CompletedCourseCreateArgs} args - Arguments to create a CompletedCourse.
     * @example
     * // Create one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.create({
     *   data: {
     *     // ... data to create a CompletedCourse
     *   }
     * })
     * 
     */
    create<T extends CompletedCourseCreateArgs>(args: SelectSubset<T, CompletedCourseCreateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedCourses.
     * @param {CompletedCourseCreateManyArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedCourseCreateManyArgs>(args?: SelectSubset<T, CompletedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedCourses and returns the data saved in the database.
     * @param {CompletedCourseCreateManyAndReturnArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedCourse.
     * @param {CompletedCourseDeleteArgs} args - Arguments to delete one CompletedCourse.
     * @example
     * // Delete one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.delete({
     *   where: {
     *     // ... filter to delete one CompletedCourse
     *   }
     * })
     * 
     */
    delete<T extends CompletedCourseDeleteArgs>(args: SelectSubset<T, CompletedCourseDeleteArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedCourse.
     * @param {CompletedCourseUpdateArgs} args - Arguments to update one CompletedCourse.
     * @example
     * // Update one CompletedCourse
     * const completedCourse = await prisma.completedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedCourseUpdateArgs>(args: SelectSubset<T, CompletedCourseUpdateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedCourses.
     * @param {CompletedCourseDeleteManyArgs} args - Arguments to filter CompletedCourses to delete.
     * @example
     * // Delete a few CompletedCourses
     * const { count } = await prisma.completedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedCourseDeleteManyArgs>(args?: SelectSubset<T, CompletedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedCourseUpdateManyArgs>(args: SelectSubset<T, CompletedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses and returns the data updated in the database.
     * @param {CompletedCourseUpdateManyAndReturnArgs} args - Arguments to update many CompletedCourses.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedCourse.
     * @param {CompletedCourseUpsertArgs} args - Arguments to update or create a CompletedCourse.
     * @example
     * // Update or create a CompletedCourse
     * const completedCourse = await prisma.completedCourse.upsert({
     *   create: {
     *     // ... data to create a CompletedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedCourse we want to update
     *   }
     * })
     */
    upsert<T extends CompletedCourseUpsertArgs>(args: SelectSubset<T, CompletedCourseUpsertArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseCountArgs} args - Arguments to filter CompletedCourses to count.
     * @example
     * // Count the number of CompletedCourses
     * const count = await prisma.completedCourse.count({
     *   where: {
     *     // ... the filter for the CompletedCourses we want to count
     *   }
     * })
    **/
    count<T extends CompletedCourseCountArgs>(
      args?: Subset<T, CompletedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedCourseAggregateArgs>(args: Subset<T, CompletedCourseAggregateArgs>): Prisma.PrismaPromise<GetCompletedCourseAggregateType<T>>

    /**
     * Group by CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedCourseGroupByArgs['orderBy'] }
        : { orderBy?: CompletedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedCourse model
   */
  readonly fields: CompletedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedCourse model
   */
  interface CompletedCourseFieldRefs {
    readonly id: FieldRef<"CompletedCourse", 'Int'>
    readonly course: FieldRef<"CompletedCourse", 'String'>
    readonly grade: FieldRef<"CompletedCourse", 'String'>
    readonly userId: FieldRef<"CompletedCourse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompletedCourse findUnique
   */
  export type CompletedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findUniqueOrThrow
   */
  export type CompletedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findFirst
   */
  export type CompletedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findFirstOrThrow
   */
  export type CompletedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findMany
   */
  export type CompletedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourses to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse create
   */
  export type CompletedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedCourse.
     */
    data: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
  }

  /**
   * CompletedCourse createMany
   */
  export type CompletedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
  }

  /**
   * CompletedCourse createManyAndReturn
   */
  export type CompletedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse update
   */
  export type CompletedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedCourse.
     */
    data: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
    /**
     * Choose, which CompletedCourse to update.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse updateMany
   */
  export type CompletedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
  }

  /**
   * CompletedCourse updateManyAndReturn
   */
  export type CompletedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse upsert
   */
  export type CompletedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedCourse to update in case it exists.
     */
    where: CompletedCourseWhereUniqueInput
    /**
     * In case the CompletedCourse found by the `where` argument doesn't exist, create a new CompletedCourse with this data.
     */
    create: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
    /**
     * In case the CompletedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
  }

  /**
   * CompletedCourse delete
   */
  export type CompletedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter which CompletedCourse to delete.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse deleteMany
   */
  export type CompletedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourses to delete
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to delete.
     */
    limit?: number
  }

  /**
   * CompletedCourse without action
   */
  export type CompletedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
  }


  /**
   * Model InstructorInterest
   */

  export type AggregateInstructorInterest = {
    _count: InstructorInterestCountAggregateOutputType | null
    _avg: InstructorInterestAvgAggregateOutputType | null
    _sum: InstructorInterestSumAggregateOutputType | null
    _min: InstructorInterestMinAggregateOutputType | null
    _max: InstructorInterestMaxAggregateOutputType | null
  }

  export type InstructorInterestAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type InstructorInterestSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type InstructorInterestMinAggregateOutputType = {
    id: number | null
    instructor: string | null
    courseId: number | null
  }

  export type InstructorInterestMaxAggregateOutputType = {
    id: number | null
    instructor: string | null
    courseId: number | null
  }

  export type InstructorInterestCountAggregateOutputType = {
    id: number
    instructor: number
    courseId: number
    _all: number
  }


  export type InstructorInterestAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type InstructorInterestSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type InstructorInterestMinAggregateInputType = {
    id?: true
    instructor?: true
    courseId?: true
  }

  export type InstructorInterestMaxAggregateInputType = {
    id?: true
    instructor?: true
    courseId?: true
  }

  export type InstructorInterestCountAggregateInputType = {
    id?: true
    instructor?: true
    courseId?: true
    _all?: true
  }

  export type InstructorInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorInterest to aggregate.
     */
    where?: InstructorInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorInterests to fetch.
     */
    orderBy?: InstructorInterestOrderByWithRelationInput | InstructorInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorInterests
    **/
    _count?: true | InstructorInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorInterestMaxAggregateInputType
  }

  export type GetInstructorInterestAggregateType<T extends InstructorInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorInterest[P]>
      : GetScalarType<T[P], AggregateInstructorInterest[P]>
  }




  export type InstructorInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorInterestWhereInput
    orderBy?: InstructorInterestOrderByWithAggregationInput | InstructorInterestOrderByWithAggregationInput[]
    by: InstructorInterestScalarFieldEnum[] | InstructorInterestScalarFieldEnum
    having?: InstructorInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorInterestCountAggregateInputType | true
    _avg?: InstructorInterestAvgAggregateInputType
    _sum?: InstructorInterestSumAggregateInputType
    _min?: InstructorInterestMinAggregateInputType
    _max?: InstructorInterestMaxAggregateInputType
  }

  export type InstructorInterestGroupByOutputType = {
    id: number
    instructor: string
    courseId: number
    _count: InstructorInterestCountAggregateOutputType | null
    _avg: InstructorInterestAvgAggregateOutputType | null
    _sum: InstructorInterestSumAggregateOutputType | null
    _min: InstructorInterestMinAggregateOutputType | null
    _max: InstructorInterestMaxAggregateOutputType | null
  }

  type GetInstructorInterestGroupByPayload<T extends InstructorInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorInterestGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorInterestGroupByOutputType[P]>
        }
      >
    >


  export type InstructorInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorInterest"]>

  export type InstructorInterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorInterest"]>

  export type InstructorInterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorInterest"]>

  export type InstructorInterestSelectScalar = {
    id?: boolean
    instructor?: boolean
    courseId?: boolean
  }

  export type InstructorInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructor" | "courseId", ExtArgs["result"]["instructorInterest"]>
  export type InstructorInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type InstructorInterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type InstructorInterestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $InstructorInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorInterest"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructor: string
      courseId: number
    }, ExtArgs["result"]["instructorInterest"]>
    composites: {}
  }

  type InstructorInterestGetPayload<S extends boolean | null | undefined | InstructorInterestDefaultArgs> = $Result.GetResult<Prisma.$InstructorInterestPayload, S>

  type InstructorInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorInterestCountAggregateInputType | true
    }

  export interface InstructorInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorInterest'], meta: { name: 'InstructorInterest' } }
    /**
     * Find zero or one InstructorInterest that matches the filter.
     * @param {InstructorInterestFindUniqueArgs} args - Arguments to find a InstructorInterest
     * @example
     * // Get one InstructorInterest
     * const instructorInterest = await prisma.instructorInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorInterestFindUniqueArgs>(args: SelectSubset<T, InstructorInterestFindUniqueArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorInterestFindUniqueOrThrowArgs} args - Arguments to find a InstructorInterest
     * @example
     * // Get one InstructorInterest
     * const instructorInterest = await prisma.instructorInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestFindFirstArgs} args - Arguments to find a InstructorInterest
     * @example
     * // Get one InstructorInterest
     * const instructorInterest = await prisma.instructorInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorInterestFindFirstArgs>(args?: SelectSubset<T, InstructorInterestFindFirstArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestFindFirstOrThrowArgs} args - Arguments to find a InstructorInterest
     * @example
     * // Get one InstructorInterest
     * const instructorInterest = await prisma.instructorInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorInterests
     * const instructorInterests = await prisma.instructorInterest.findMany()
     * 
     * // Get first 10 InstructorInterests
     * const instructorInterests = await prisma.instructorInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorInterestWithIdOnly = await prisma.instructorInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorInterestFindManyArgs>(args?: SelectSubset<T, InstructorInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorInterest.
     * @param {InstructorInterestCreateArgs} args - Arguments to create a InstructorInterest.
     * @example
     * // Create one InstructorInterest
     * const InstructorInterest = await prisma.instructorInterest.create({
     *   data: {
     *     // ... data to create a InstructorInterest
     *   }
     * })
     * 
     */
    create<T extends InstructorInterestCreateArgs>(args: SelectSubset<T, InstructorInterestCreateArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorInterests.
     * @param {InstructorInterestCreateManyArgs} args - Arguments to create many InstructorInterests.
     * @example
     * // Create many InstructorInterests
     * const instructorInterest = await prisma.instructorInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorInterestCreateManyArgs>(args?: SelectSubset<T, InstructorInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorInterests and returns the data saved in the database.
     * @param {InstructorInterestCreateManyAndReturnArgs} args - Arguments to create many InstructorInterests.
     * @example
     * // Create many InstructorInterests
     * const instructorInterest = await prisma.instructorInterest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorInterests and only return the `id`
     * const instructorInterestWithIdOnly = await prisma.instructorInterest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorInterestCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorInterest.
     * @param {InstructorInterestDeleteArgs} args - Arguments to delete one InstructorInterest.
     * @example
     * // Delete one InstructorInterest
     * const InstructorInterest = await prisma.instructorInterest.delete({
     *   where: {
     *     // ... filter to delete one InstructorInterest
     *   }
     * })
     * 
     */
    delete<T extends InstructorInterestDeleteArgs>(args: SelectSubset<T, InstructorInterestDeleteArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorInterest.
     * @param {InstructorInterestUpdateArgs} args - Arguments to update one InstructorInterest.
     * @example
     * // Update one InstructorInterest
     * const instructorInterest = await prisma.instructorInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorInterestUpdateArgs>(args: SelectSubset<T, InstructorInterestUpdateArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorInterests.
     * @param {InstructorInterestDeleteManyArgs} args - Arguments to filter InstructorInterests to delete.
     * @example
     * // Delete a few InstructorInterests
     * const { count } = await prisma.instructorInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorInterestDeleteManyArgs>(args?: SelectSubset<T, InstructorInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorInterests
     * const instructorInterest = await prisma.instructorInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorInterestUpdateManyArgs>(args: SelectSubset<T, InstructorInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorInterests and returns the data updated in the database.
     * @param {InstructorInterestUpdateManyAndReturnArgs} args - Arguments to update many InstructorInterests.
     * @example
     * // Update many InstructorInterests
     * const instructorInterest = await prisma.instructorInterest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorInterests and only return the `id`
     * const instructorInterestWithIdOnly = await prisma.instructorInterest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorInterestUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorInterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorInterest.
     * @param {InstructorInterestUpsertArgs} args - Arguments to update or create a InstructorInterest.
     * @example
     * // Update or create a InstructorInterest
     * const instructorInterest = await prisma.instructorInterest.upsert({
     *   create: {
     *     // ... data to create a InstructorInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorInterest we want to update
     *   }
     * })
     */
    upsert<T extends InstructorInterestUpsertArgs>(args: SelectSubset<T, InstructorInterestUpsertArgs<ExtArgs>>): Prisma__InstructorInterestClient<$Result.GetResult<Prisma.$InstructorInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestCountArgs} args - Arguments to filter InstructorInterests to count.
     * @example
     * // Count the number of InstructorInterests
     * const count = await prisma.instructorInterest.count({
     *   where: {
     *     // ... the filter for the InstructorInterests we want to count
     *   }
     * })
    **/
    count<T extends InstructorInterestCountArgs>(
      args?: Subset<T, InstructorInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorInterestAggregateArgs>(args: Subset<T, InstructorInterestAggregateArgs>): Prisma.PrismaPromise<GetInstructorInterestAggregateType<T>>

    /**
     * Group by InstructorInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorInterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorInterestGroupByArgs['orderBy'] }
        : { orderBy?: InstructorInterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorInterest model
   */
  readonly fields: InstructorInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InstructorInterest model
   */
  interface InstructorInterestFieldRefs {
    readonly id: FieldRef<"InstructorInterest", 'Int'>
    readonly instructor: FieldRef<"InstructorInterest", 'String'>
    readonly courseId: FieldRef<"InstructorInterest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InstructorInterest findUnique
   */
  export type InstructorInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * Filter, which InstructorInterest to fetch.
     */
    where: InstructorInterestWhereUniqueInput
  }

  /**
   * InstructorInterest findUniqueOrThrow
   */
  export type InstructorInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * Filter, which InstructorInterest to fetch.
     */
    where: InstructorInterestWhereUniqueInput
  }

  /**
   * InstructorInterest findFirst
   */
  export type InstructorInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * Filter, which InstructorInterest to fetch.
     */
    where?: InstructorInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorInterests to fetch.
     */
    orderBy?: InstructorInterestOrderByWithRelationInput | InstructorInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorInterests.
     */
    cursor?: InstructorInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorInterests.
     */
    distinct?: InstructorInterestScalarFieldEnum | InstructorInterestScalarFieldEnum[]
  }

  /**
   * InstructorInterest findFirstOrThrow
   */
  export type InstructorInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * Filter, which InstructorInterest to fetch.
     */
    where?: InstructorInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorInterests to fetch.
     */
    orderBy?: InstructorInterestOrderByWithRelationInput | InstructorInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorInterests.
     */
    cursor?: InstructorInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorInterests.
     */
    distinct?: InstructorInterestScalarFieldEnum | InstructorInterestScalarFieldEnum[]
  }

  /**
   * InstructorInterest findMany
   */
  export type InstructorInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * Filter, which InstructorInterests to fetch.
     */
    where?: InstructorInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorInterests to fetch.
     */
    orderBy?: InstructorInterestOrderByWithRelationInput | InstructorInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorInterests.
     */
    cursor?: InstructorInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorInterests.
     */
    skip?: number
    distinct?: InstructorInterestScalarFieldEnum | InstructorInterestScalarFieldEnum[]
  }

  /**
   * InstructorInterest create
   */
  export type InstructorInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorInterest.
     */
    data: XOR<InstructorInterestCreateInput, InstructorInterestUncheckedCreateInput>
  }

  /**
   * InstructorInterest createMany
   */
  export type InstructorInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorInterests.
     */
    data: InstructorInterestCreateManyInput | InstructorInterestCreateManyInput[]
  }

  /**
   * InstructorInterest createManyAndReturn
   */
  export type InstructorInterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorInterests.
     */
    data: InstructorInterestCreateManyInput | InstructorInterestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorInterest update
   */
  export type InstructorInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorInterest.
     */
    data: XOR<InstructorInterestUpdateInput, InstructorInterestUncheckedUpdateInput>
    /**
     * Choose, which InstructorInterest to update.
     */
    where: InstructorInterestWhereUniqueInput
  }

  /**
   * InstructorInterest updateMany
   */
  export type InstructorInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorInterests.
     */
    data: XOR<InstructorInterestUpdateManyMutationInput, InstructorInterestUncheckedUpdateManyInput>
    /**
     * Filter which InstructorInterests to update
     */
    where?: InstructorInterestWhereInput
    /**
     * Limit how many InstructorInterests to update.
     */
    limit?: number
  }

  /**
   * InstructorInterest updateManyAndReturn
   */
  export type InstructorInterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * The data used to update InstructorInterests.
     */
    data: XOR<InstructorInterestUpdateManyMutationInput, InstructorInterestUncheckedUpdateManyInput>
    /**
     * Filter which InstructorInterests to update
     */
    where?: InstructorInterestWhereInput
    /**
     * Limit how many InstructorInterests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorInterest upsert
   */
  export type InstructorInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorInterest to update in case it exists.
     */
    where: InstructorInterestWhereUniqueInput
    /**
     * In case the InstructorInterest found by the `where` argument doesn't exist, create a new InstructorInterest with this data.
     */
    create: XOR<InstructorInterestCreateInput, InstructorInterestUncheckedCreateInput>
    /**
     * In case the InstructorInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorInterestUpdateInput, InstructorInterestUncheckedUpdateInput>
  }

  /**
   * InstructorInterest delete
   */
  export type InstructorInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
    /**
     * Filter which InstructorInterest to delete.
     */
    where: InstructorInterestWhereUniqueInput
  }

  /**
   * InstructorInterest deleteMany
   */
  export type InstructorInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorInterests to delete
     */
    where?: InstructorInterestWhereInput
    /**
     * Limit how many InstructorInterests to delete.
     */
    limit?: number
  }

  /**
   * InstructorInterest without action
   */
  export type InstructorInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorInterest
     */
    select?: InstructorInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorInterest
     */
    omit?: InstructorInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInterestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CourseScalarFieldEnum: {
    id: 'id',
    cname: 'cname',
    category: 'category',
    isPublished: 'isPublished'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const PrerequisiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    courseId: 'courseId'
  };

  export type PrerequisiteScalarFieldEnum = (typeof PrerequisiteScalarFieldEnum)[keyof typeof PrerequisiteScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    instructor: 'instructor',
    limit: 'limit',
    enrolled: 'enrolled',
    status: 'status',
    schedule: 'schedule',
    courseId: 'courseId'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    name: 'name',
    studentId: 'studentId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompletedCourseScalarFieldEnum: {
    id: 'id',
    course: 'course',
    grade: 'grade',
    userId: 'userId'
  };

  export type CompletedCourseScalarFieldEnum = (typeof CompletedCourseScalarFieldEnum)[keyof typeof CompletedCourseScalarFieldEnum]


  export const InstructorInterestScalarFieldEnum: {
    id: 'id',
    instructor: 'instructor',
    courseId: 'courseId'
  };

  export type InstructorInterestScalarFieldEnum = (typeof InstructorInterestScalarFieldEnum)[keyof typeof InstructorInterestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    cname?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    isPublished?: BoolFilter<"Course"> | boolean
    classes?: ClassListRelationFilter
    prerequisites?: PrerequisiteListRelationFilter
    interests?: InstructorInterestListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    cname?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
    prerequisites?: PrerequisiteOrderByRelationAggregateInput
    interests?: InstructorInterestOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cname?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    category?: StringFilter<"Course"> | string
    isPublished?: BoolFilter<"Course"> | boolean
    classes?: ClassListRelationFilter
    prerequisites?: PrerequisiteListRelationFilter
    interests?: InstructorInterestListRelationFilter
  }, "id" | "cname">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    cname?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    cname?: StringWithAggregatesFilter<"Course"> | string
    category?: StringWithAggregatesFilter<"Course"> | string
    isPublished?: BoolWithAggregatesFilter<"Course"> | boolean
  }

  export type PrerequisiteWhereInput = {
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    id?: IntFilter<"Prerequisite"> | number
    name?: StringFilter<"Prerequisite"> | string
    courseId?: IntFilter<"Prerequisite"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type PrerequisiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type PrerequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    name?: StringFilter<"Prerequisite"> | string
    courseId?: IntFilter<"Prerequisite"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type PrerequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    _count?: PrerequisiteCountOrderByAggregateInput
    _avg?: PrerequisiteAvgOrderByAggregateInput
    _max?: PrerequisiteMaxOrderByAggregateInput
    _min?: PrerequisiteMinOrderByAggregateInput
    _sum?: PrerequisiteSumOrderByAggregateInput
  }

  export type PrerequisiteScalarWhereWithAggregatesInput = {
    AND?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    OR?: PrerequisiteScalarWhereWithAggregatesInput[]
    NOT?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prerequisite"> | number
    name?: StringWithAggregatesFilter<"Prerequisite"> | string
    courseId?: IntWithAggregatesFilter<"Prerequisite"> | number
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    instructor?: StringFilter<"Class"> | string
    limit?: IntFilter<"Class"> | number
    enrolled?: IntFilter<"Class"> | number
    status?: StringFilter<"Class"> | string
    schedule?: StringFilter<"Class"> | string
    courseId?: IntFilter<"Class"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    instructor?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    status?: SortOrder
    schedule?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    instructor?: StringFilter<"Class"> | string
    limit?: IntFilter<"Class"> | number
    enrolled?: IntFilter<"Class"> | number
    status?: StringFilter<"Class"> | string
    schedule?: StringFilter<"Class"> | string
    courseId?: IntFilter<"Class"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    instructor?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    status?: SortOrder
    schedule?: SortOrder
    courseId?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    instructor?: StringWithAggregatesFilter<"Class"> | string
    limit?: IntWithAggregatesFilter<"Class"> | number
    enrolled?: IntWithAggregatesFilter<"Class"> | number
    status?: StringWithAggregatesFilter<"Class"> | string
    schedule?: StringWithAggregatesFilter<"Class"> | string
    courseId?: IntWithAggregatesFilter<"Class"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    studentId?: StringNullableFilter<"User"> | string | null
    completedGrades?: CompletedCourseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    studentId?: SortOrderInput | SortOrder
    completedGrades?: CompletedCourseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    studentId?: StringNullableFilter<"User"> | string | null
    completedGrades?: CompletedCourseListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    studentId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    studentId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CompletedCourseWhereInput = {
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    course?: StringFilter<"CompletedCourse"> | string
    grade?: StringFilter<"CompletedCourse"> | string
    userId?: IntFilter<"CompletedCourse"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompletedCourseOrderByWithRelationInput = {
    id?: SortOrder
    course?: SortOrder
    grade?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CompletedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    course?: StringFilter<"CompletedCourse"> | string
    grade?: StringFilter<"CompletedCourse"> | string
    userId?: IntFilter<"CompletedCourse"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CompletedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    course?: SortOrder
    grade?: SortOrder
    userId?: SortOrder
    _count?: CompletedCourseCountOrderByAggregateInput
    _avg?: CompletedCourseAvgOrderByAggregateInput
    _max?: CompletedCourseMaxOrderByAggregateInput
    _min?: CompletedCourseMinOrderByAggregateInput
    _sum?: CompletedCourseSumOrderByAggregateInput
  }

  export type CompletedCourseScalarWhereWithAggregatesInput = {
    AND?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    OR?: CompletedCourseScalarWhereWithAggregatesInput[]
    NOT?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedCourse"> | number
    course?: StringWithAggregatesFilter<"CompletedCourse"> | string
    grade?: StringWithAggregatesFilter<"CompletedCourse"> | string
    userId?: IntWithAggregatesFilter<"CompletedCourse"> | number
  }

  export type InstructorInterestWhereInput = {
    AND?: InstructorInterestWhereInput | InstructorInterestWhereInput[]
    OR?: InstructorInterestWhereInput[]
    NOT?: InstructorInterestWhereInput | InstructorInterestWhereInput[]
    id?: IntFilter<"InstructorInterest"> | number
    instructor?: StringFilter<"InstructorInterest"> | string
    courseId?: IntFilter<"InstructorInterest"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type InstructorInterestOrderByWithRelationInput = {
    id?: SortOrder
    instructor?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type InstructorInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructorInterestWhereInput | InstructorInterestWhereInput[]
    OR?: InstructorInterestWhereInput[]
    NOT?: InstructorInterestWhereInput | InstructorInterestWhereInput[]
    instructor?: StringFilter<"InstructorInterest"> | string
    courseId?: IntFilter<"InstructorInterest"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type InstructorInterestOrderByWithAggregationInput = {
    id?: SortOrder
    instructor?: SortOrder
    courseId?: SortOrder
    _count?: InstructorInterestCountOrderByAggregateInput
    _avg?: InstructorInterestAvgOrderByAggregateInput
    _max?: InstructorInterestMaxOrderByAggregateInput
    _min?: InstructorInterestMinOrderByAggregateInput
    _sum?: InstructorInterestSumOrderByAggregateInput
  }

  export type InstructorInterestScalarWhereWithAggregatesInput = {
    AND?: InstructorInterestScalarWhereWithAggregatesInput | InstructorInterestScalarWhereWithAggregatesInput[]
    OR?: InstructorInterestScalarWhereWithAggregatesInput[]
    NOT?: InstructorInterestScalarWhereWithAggregatesInput | InstructorInterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstructorInterest"> | number
    instructor?: StringWithAggregatesFilter<"InstructorInterest"> | string
    courseId?: IntWithAggregatesFilter<"InstructorInterest"> | number
  }

  export type CourseCreateInput = {
    cname: string
    category: string
    isPublished?: boolean
    classes?: ClassCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    interests?: InstructorInterestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    cname: string
    category: string
    isPublished?: boolean
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    interests?: InstructorInterestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    classes?: ClassUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    interests?: InstructorInterestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    interests?: InstructorInterestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    cname: string
    category: string
    isPublished?: boolean
  }

  export type CourseUpdateManyMutationInput = {
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrerequisiteCreateInput = {
    name: string
    course: CourseCreateNestedOneWithoutPrerequisitesInput
  }

  export type PrerequisiteUncheckedCreateInput = {
    id?: number
    name: string
    courseId: number
  }

  export type PrerequisiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
  }

  export type PrerequisiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type PrerequisiteCreateManyInput = {
    id?: number
    name: string
    courseId: number
  }

  export type PrerequisiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateInput = {
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
    course: CourseCreateNestedOneWithoutClassesInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
    courseId: number
  }

  export type ClassUpdateInput = {
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateManyInput = {
    id?: number
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
    courseId: number
  }

  export type ClassUpdateManyMutationInput = {
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: string
    name: string
    studentId?: string | null
    completedGrades?: CompletedCourseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: string
    name: string
    studentId?: string | null
    completedGrades?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    completedGrades?: CompletedCourseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    completedGrades?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: string
    name: string
    studentId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseCreateInput = {
    course: string
    grade: string
    user: UserCreateNestedOneWithoutCompletedGradesInput
  }

  export type CompletedCourseUncheckedCreateInput = {
    id?: number
    course: string
    grade: string
    userId: number
  }

  export type CompletedCourseUpdateInput = {
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompletedGradesNestedInput
  }

  export type CompletedCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CompletedCourseCreateManyInput = {
    id?: number
    course: string
    grade: string
    userId: number
  }

  export type CompletedCourseUpdateManyMutationInput = {
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InstructorInterestCreateInput = {
    instructor: string
    course: CourseCreateNestedOneWithoutInterestsInput
  }

  export type InstructorInterestUncheckedCreateInput = {
    id?: number
    instructor: string
    courseId: number
  }

  export type InstructorInterestUpdateInput = {
    instructor?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InstructorInterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type InstructorInterestCreateManyInput = {
    id?: number
    instructor: string
    courseId: number
  }

  export type InstructorInterestUpdateManyMutationInput = {
    instructor?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorInterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type PrerequisiteListRelationFilter = {
    every?: PrerequisiteWhereInput
    some?: PrerequisiteWhereInput
    none?: PrerequisiteWhereInput
  }

  export type InstructorInterestListRelationFilter = {
    every?: InstructorInterestWhereInput
    some?: InstructorInterestWhereInput
    none?: InstructorInterestWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    cname?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    cname?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    cname?: SortOrder
    category?: SortOrder
    isPublished?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type PrerequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
  }

  export type PrerequisiteAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type PrerequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
  }

  export type PrerequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
  }

  export type PrerequisiteSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    instructor?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    status?: SortOrder
    schedule?: SortOrder
    courseId?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    courseId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    instructor?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    status?: SortOrder
    schedule?: SortOrder
    courseId?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    instructor?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    status?: SortOrder
    schedule?: SortOrder
    courseId?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
    limit?: SortOrder
    enrolled?: SortOrder
    courseId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CompletedCourseListRelationFilter = {
    every?: CompletedCourseWhereInput
    some?: CompletedCourseWhereInput
    none?: CompletedCourseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompletedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    studentId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    studentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    studentId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompletedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    grade?: SortOrder
    userId?: SortOrder
  }

  export type CompletedCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CompletedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    grade?: SortOrder
    userId?: SortOrder
  }

  export type CompletedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    grade?: SortOrder
    userId?: SortOrder
  }

  export type CompletedCourseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InstructorInterestCountOrderByAggregateInput = {
    id?: SortOrder
    instructor?: SortOrder
    courseId?: SortOrder
  }

  export type InstructorInterestAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type InstructorInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    instructor?: SortOrder
    courseId?: SortOrder
  }

  export type InstructorInterestMinOrderByAggregateInput = {
    id?: SortOrder
    instructor?: SortOrder
    courseId?: SortOrder
  }

  export type InstructorInterestSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type ClassCreateNestedManyWithoutCourseInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PrerequisiteCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type InstructorInterestCreateNestedManyWithoutCourseInput = {
    create?: XOR<InstructorInterestCreateWithoutCourseInput, InstructorInterestUncheckedCreateWithoutCourseInput> | InstructorInterestCreateWithoutCourseInput[] | InstructorInterestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: InstructorInterestCreateOrConnectWithoutCourseInput | InstructorInterestCreateOrConnectWithoutCourseInput[]
    createMany?: InstructorInterestCreateManyCourseInputEnvelope
    connect?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type InstructorInterestUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<InstructorInterestCreateWithoutCourseInput, InstructorInterestUncheckedCreateWithoutCourseInput> | InstructorInterestCreateWithoutCourseInput[] | InstructorInterestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: InstructorInterestCreateOrConnectWithoutCourseInput | InstructorInterestCreateOrConnectWithoutCourseInput[]
    createMany?: InstructorInterestCreateManyCourseInputEnvelope
    connect?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClassUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCourseInput | ClassUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCourseInput | ClassUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCourseInput | ClassUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PrerequisiteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type InstructorInterestUpdateManyWithoutCourseNestedInput = {
    create?: XOR<InstructorInterestCreateWithoutCourseInput, InstructorInterestUncheckedCreateWithoutCourseInput> | InstructorInterestCreateWithoutCourseInput[] | InstructorInterestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: InstructorInterestCreateOrConnectWithoutCourseInput | InstructorInterestCreateOrConnectWithoutCourseInput[]
    upsert?: InstructorInterestUpsertWithWhereUniqueWithoutCourseInput | InstructorInterestUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: InstructorInterestCreateManyCourseInputEnvelope
    set?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    disconnect?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    delete?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    connect?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    update?: InstructorInterestUpdateWithWhereUniqueWithoutCourseInput | InstructorInterestUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: InstructorInterestUpdateManyWithWhereWithoutCourseInput | InstructorInterestUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: InstructorInterestScalarWhereInput | InstructorInterestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCourseInput | ClassUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCourseInput | ClassUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCourseInput | ClassUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type InstructorInterestUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<InstructorInterestCreateWithoutCourseInput, InstructorInterestUncheckedCreateWithoutCourseInput> | InstructorInterestCreateWithoutCourseInput[] | InstructorInterestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: InstructorInterestCreateOrConnectWithoutCourseInput | InstructorInterestCreateOrConnectWithoutCourseInput[]
    upsert?: InstructorInterestUpsertWithWhereUniqueWithoutCourseInput | InstructorInterestUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: InstructorInterestCreateManyCourseInputEnvelope
    set?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    disconnect?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    delete?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    connect?: InstructorInterestWhereUniqueInput | InstructorInterestWhereUniqueInput[]
    update?: InstructorInterestUpdateWithWhereUniqueWithoutCourseInput | InstructorInterestUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: InstructorInterestUpdateManyWithWhereWithoutCourseInput | InstructorInterestUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: InstructorInterestScalarWhereInput | InstructorInterestScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    upsert?: CourseUpsertWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPrerequisitesInput, CourseUpdateWithoutPrerequisitesInput>, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseCreateNestedOneWithoutClassesInput = {
    create?: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutClassesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutClassesInput
    upsert?: CourseUpsertWithoutClassesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutClassesInput, CourseUpdateWithoutClassesInput>, CourseUncheckedUpdateWithoutClassesInput>
  }

  export type CompletedCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompletedCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutUserInput | CompletedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutUserInput | CompletedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutUserInput | CompletedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CompletedCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutUserInput | CompletedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutUserInput | CompletedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutUserInput | CompletedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompletedGradesInput = {
    create?: XOR<UserCreateWithoutCompletedGradesInput, UserUncheckedCreateWithoutCompletedGradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedGradesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompletedGradesNestedInput = {
    create?: XOR<UserCreateWithoutCompletedGradesInput, UserUncheckedCreateWithoutCompletedGradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedGradesInput
    upsert?: UserUpsertWithoutCompletedGradesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletedGradesInput, UserUpdateWithoutCompletedGradesInput>, UserUncheckedUpdateWithoutCompletedGradesInput>
  }

  export type CourseCreateNestedOneWithoutInterestsInput = {
    create?: XOR<CourseCreateWithoutInterestsInput, CourseUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutInterestsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<CourseCreateWithoutInterestsInput, CourseUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutInterestsInput
    upsert?: CourseUpsertWithoutInterestsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutInterestsInput, CourseUpdateWithoutInterestsInput>, CourseUncheckedUpdateWithoutInterestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClassCreateWithoutCourseInput = {
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
  }

  export type ClassUncheckedCreateWithoutCourseInput = {
    id?: number
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
  }

  export type ClassCreateOrConnectWithoutCourseInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput>
  }

  export type ClassCreateManyCourseInputEnvelope = {
    data: ClassCreateManyCourseInput | ClassCreateManyCourseInput[]
  }

  export type PrerequisiteCreateWithoutCourseInput = {
    name: string
  }

  export type PrerequisiteUncheckedCreateWithoutCourseInput = {
    id?: number
    name: string
  }

  export type PrerequisiteCreateOrConnectWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteCreateManyCourseInputEnvelope = {
    data: PrerequisiteCreateManyCourseInput | PrerequisiteCreateManyCourseInput[]
  }

  export type InstructorInterestCreateWithoutCourseInput = {
    instructor: string
  }

  export type InstructorInterestUncheckedCreateWithoutCourseInput = {
    id?: number
    instructor: string
  }

  export type InstructorInterestCreateOrConnectWithoutCourseInput = {
    where: InstructorInterestWhereUniqueInput
    create: XOR<InstructorInterestCreateWithoutCourseInput, InstructorInterestUncheckedCreateWithoutCourseInput>
  }

  export type InstructorInterestCreateManyCourseInputEnvelope = {
    data: InstructorInterestCreateManyCourseInput | InstructorInterestCreateManyCourseInput[]
  }

  export type ClassUpsertWithWhereUniqueWithoutCourseInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutCourseInput, ClassUncheckedUpdateWithoutCourseInput>
    create: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutCourseInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutCourseInput, ClassUncheckedUpdateWithoutCourseInput>
  }

  export type ClassUpdateManyWithWhereWithoutCourseInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutCourseInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: IntFilter<"Class"> | number
    instructor?: StringFilter<"Class"> | string
    limit?: IntFilter<"Class"> | number
    enrolled?: IntFilter<"Class"> | number
    status?: StringFilter<"Class"> | string
    schedule?: StringFilter<"Class"> | string
    courseId?: IntFilter<"Class"> | number
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutCourseInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutCourseInput>
  }

  export type PrerequisiteScalarWhereInput = {
    AND?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    OR?: PrerequisiteScalarWhereInput[]
    NOT?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    id?: IntFilter<"Prerequisite"> | number
    name?: StringFilter<"Prerequisite"> | string
    courseId?: IntFilter<"Prerequisite"> | number
  }

  export type InstructorInterestUpsertWithWhereUniqueWithoutCourseInput = {
    where: InstructorInterestWhereUniqueInput
    update: XOR<InstructorInterestUpdateWithoutCourseInput, InstructorInterestUncheckedUpdateWithoutCourseInput>
    create: XOR<InstructorInterestCreateWithoutCourseInput, InstructorInterestUncheckedCreateWithoutCourseInput>
  }

  export type InstructorInterestUpdateWithWhereUniqueWithoutCourseInput = {
    where: InstructorInterestWhereUniqueInput
    data: XOR<InstructorInterestUpdateWithoutCourseInput, InstructorInterestUncheckedUpdateWithoutCourseInput>
  }

  export type InstructorInterestUpdateManyWithWhereWithoutCourseInput = {
    where: InstructorInterestScalarWhereInput
    data: XOR<InstructorInterestUpdateManyMutationInput, InstructorInterestUncheckedUpdateManyWithoutCourseInput>
  }

  export type InstructorInterestScalarWhereInput = {
    AND?: InstructorInterestScalarWhereInput | InstructorInterestScalarWhereInput[]
    OR?: InstructorInterestScalarWhereInput[]
    NOT?: InstructorInterestScalarWhereInput | InstructorInterestScalarWhereInput[]
    id?: IntFilter<"InstructorInterest"> | number
    instructor?: StringFilter<"InstructorInterest"> | string
    courseId?: IntFilter<"InstructorInterest"> | number
  }

  export type CourseCreateWithoutPrerequisitesInput = {
    cname: string
    category: string
    isPublished?: boolean
    classes?: ClassCreateNestedManyWithoutCourseInput
    interests?: InstructorInterestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPrerequisitesInput = {
    id?: number
    cname: string
    category: string
    isPublished?: boolean
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    interests?: InstructorInterestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type CourseUpsertWithoutPrerequisitesInput = {
    update: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPrerequisitesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateWithoutPrerequisitesInput = {
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    classes?: ClassUpdateManyWithoutCourseNestedInput
    interests?: InstructorInterestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    interests?: InstructorInterestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutClassesInput = {
    cname: string
    category: string
    isPublished?: boolean
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    interests?: InstructorInterestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutClassesInput = {
    id?: number
    cname: string
    category: string
    isPublished?: boolean
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    interests?: InstructorInterestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutClassesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
  }

  export type CourseUpsertWithoutClassesInput = {
    update: XOR<CourseUpdateWithoutClassesInput, CourseUncheckedUpdateWithoutClassesInput>
    create: XOR<CourseCreateWithoutClassesInput, CourseUncheckedCreateWithoutClassesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutClassesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutClassesInput, CourseUncheckedUpdateWithoutClassesInput>
  }

  export type CourseUpdateWithoutClassesInput = {
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    interests?: InstructorInterestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    interests?: InstructorInterestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CompletedCourseCreateWithoutUserInput = {
    course: string
    grade: string
  }

  export type CompletedCourseUncheckedCreateWithoutUserInput = {
    id?: number
    course: string
    grade: string
  }

  export type CompletedCourseCreateOrConnectWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput>
  }

  export type CompletedCourseCreateManyUserInputEnvelope = {
    data: CompletedCourseCreateManyUserInput | CompletedCourseCreateManyUserInput[]
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutUserInput, CompletedCourseUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutUserInput, CompletedCourseUncheckedUpdateWithoutUserInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutUserInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedCourseScalarWhereInput = {
    AND?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    OR?: CompletedCourseScalarWhereInput[]
    NOT?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    course?: StringFilter<"CompletedCourse"> | string
    grade?: StringFilter<"CompletedCourse"> | string
    userId?: IntFilter<"CompletedCourse"> | number
  }

  export type UserCreateWithoutCompletedGradesInput = {
    username: string
    password: string
    role: string
    name: string
    studentId?: string | null
  }

  export type UserUncheckedCreateWithoutCompletedGradesInput = {
    id?: number
    username: string
    password: string
    role: string
    name: string
    studentId?: string | null
  }

  export type UserCreateOrConnectWithoutCompletedGradesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletedGradesInput, UserUncheckedCreateWithoutCompletedGradesInput>
  }

  export type UserUpsertWithoutCompletedGradesInput = {
    update: XOR<UserUpdateWithoutCompletedGradesInput, UserUncheckedUpdateWithoutCompletedGradesInput>
    create: XOR<UserCreateWithoutCompletedGradesInput, UserUncheckedCreateWithoutCompletedGradesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletedGradesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletedGradesInput, UserUncheckedUpdateWithoutCompletedGradesInput>
  }

  export type UserUpdateWithoutCompletedGradesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutCompletedGradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateWithoutInterestsInput = {
    cname: string
    category: string
    isPublished?: boolean
    classes?: ClassCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInterestsInput = {
    id?: number
    cname: string
    category: string
    isPublished?: boolean
    classes?: ClassUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInterestsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInterestsInput, CourseUncheckedCreateWithoutInterestsInput>
  }

  export type CourseUpsertWithoutInterestsInput = {
    update: XOR<CourseUpdateWithoutInterestsInput, CourseUncheckedUpdateWithoutInterestsInput>
    create: XOR<CourseCreateWithoutInterestsInput, CourseUncheckedCreateWithoutInterestsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutInterestsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutInterestsInput, CourseUncheckedUpdateWithoutInterestsInput>
  }

  export type CourseUpdateWithoutInterestsInput = {
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    classes?: ClassUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    classes?: ClassUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ClassCreateManyCourseInput = {
    id?: number
    instructor: string
    limit: number
    enrolled: number
    status: string
    schedule: string
  }

  export type PrerequisiteCreateManyCourseInput = {
    id?: number
    name: string
  }

  export type InstructorInterestCreateManyCourseInput = {
    id?: number
    instructor: string
  }

  export type ClassUpdateWithoutCourseInput = {
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
    limit?: IntFieldUpdateOperationsInput | number
    enrolled?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUpdateWithoutCourseInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorInterestUpdateWithoutCourseInput = {
    instructor?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorInterestUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorInterestUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseCreateManyUserInput = {
    id?: number
    course: string
    grade: string
  }

  export type CompletedCourseUpdateWithoutUserInput = {
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}