export type FilterEqualCols<InCols extends ExprRecordNested> = Partial<
  {
    [K in keyof InCols]: InCols[K] extends TExprUnknow
      ? { [K2 in K & string]: ExprResultFrom<InCols[K]> }
      : {
          [K2 in keyof InCols[K] as `${K & string}.${K2 &
            string}`]: InCols[K][K2] extends TExprUnknow
            ? ExprResultFrom<InCols[K][K2]>
            : never;
        };
  }[keyof InCols]
>;

export type ExprRecordNested = {
  [key: string]: TExprUnknow | ExprRecordNested;
};

export interface TExpr<Val, Nullable extends boolean> {
  readonly ast: any;
  readonly [TYPES]: { val: Val; nullable: Nullable };
  readonly [PRIV]: TExprInternal;
}

export type TExprUnknow = TExpr<any, boolean>;

export const PRIV = Symbol.for("ZENDB_PRIVATE");
export type PRIV = typeof PRIV;

export const TYPES = Symbol.for("ZENDB_TYPES");
export type TYPES = typeof TYPES;

export type TExprParser = (raw: any, json: boolean, nullable: boolean) => any;

export type TJsonMode = "JsonExpr" | "JsonRef" | undefined;

export type TExprAstParam = { readonly name?: string; readonly value: any };

export interface TExprInternal {
  readonly parse: TExprParser;
  readonly nullable: boolean;
  readonly jsonMode?: TJsonMode;
  readonly dependencies?: Array<any>;
}

export type ExprResultFrom<Expr extends TExprUnknow> = ExprResult<
  Expr[TYPES]["val"],
  Expr[TYPES]["nullable"]
>;

export type ExprResult<Val, Nullable extends boolean> = Nullable extends true
  ? Val | null
  : Val;
