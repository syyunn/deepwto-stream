/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleTokensInput = {
  article: string,
  tokens: string,
};

export type ModelArticleTokensConditionInput = {
  tokens?: ModelStringInput | null,
  and?: Array< ModelArticleTokensConditionInput | null > | null,
  or?: Array< ModelArticleTokensConditionInput | null > | null,
  not?: ModelArticleTokensConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateArticleTokensInput = {
  article: string,
  tokens?: string | null,
};

export type DeleteArticleTokensInput = {
  article: string,
};

export type CreateFactualTokensInput = {
  ds: string,
  tokens: string,
};

export type ModelFactualTokensConditionInput = {
  tokens?: ModelStringInput | null,
  and?: Array< ModelFactualTokensConditionInput | null > | null,
  or?: Array< ModelFactualTokensConditionInput | null > | null,
  not?: ModelFactualTokensConditionInput | null,
};

export type UpdateFactualTokensInput = {
  ds: string,
  tokens?: string | null,
};

export type DeleteFactualTokensInput = {
  ds: string,
};

export type CreateCitedInput = {
  ds_article: string,
  label: boolean,
};

export type ModelCitedConditionInput = {
  label?: ModelBooleanInput | null,
  and?: Array< ModelCitedConditionInput | null > | null,
  or?: Array< ModelCitedConditionInput | null > | null,
  not?: ModelCitedConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCitedInput = {
  ds_article: string,
  label?: boolean | null,
};

export type DeleteCitedInput = {
  ds_article: string,
};

export type ModelArticleTokensFilterInput = {
  article?: ModelStringInput | null,
  tokens?: ModelStringInput | null,
  and?: Array< ModelArticleTokensFilterInput | null > | null,
  or?: Array< ModelArticleTokensFilterInput | null > | null,
  not?: ModelArticleTokensFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFactualTokensFilterInput = {
  ds?: ModelStringInput | null,
  tokens?: ModelStringInput | null,
  and?: Array< ModelFactualTokensFilterInput | null > | null,
  or?: Array< ModelFactualTokensFilterInput | null > | null,
  not?: ModelFactualTokensFilterInput | null,
};

export type ModelCitedFilterInput = {
  ds_article?: ModelStringInput | null,
  label?: ModelBooleanInput | null,
  and?: Array< ModelCitedFilterInput | null > | null,
  or?: Array< ModelCitedFilterInput | null > | null,
  not?: ModelCitedFilterInput | null,
};

export type CreateArticleTokensMutationVariables = {
  input: CreateArticleTokensInput,
  condition?: ModelArticleTokensConditionInput | null,
};

export type CreateArticleTokensMutation = {
  createArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type UpdateArticleTokensMutationVariables = {
  input: UpdateArticleTokensInput,
  condition?: ModelArticleTokensConditionInput | null,
};

export type UpdateArticleTokensMutation = {
  updateArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type DeleteArticleTokensMutationVariables = {
  input: DeleteArticleTokensInput,
  condition?: ModelArticleTokensConditionInput | null,
};

export type DeleteArticleTokensMutation = {
  deleteArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type CreateFactualTokensMutationVariables = {
  input: CreateFactualTokensInput,
  condition?: ModelFactualTokensConditionInput | null,
};

export type CreateFactualTokensMutation = {
  createFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type UpdateFactualTokensMutationVariables = {
  input: UpdateFactualTokensInput,
  condition?: ModelFactualTokensConditionInput | null,
};

export type UpdateFactualTokensMutation = {
  updateFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type DeleteFactualTokensMutationVariables = {
  input: DeleteFactualTokensInput,
  condition?: ModelFactualTokensConditionInput | null,
};

export type DeleteFactualTokensMutation = {
  deleteFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type CreateCitedMutationVariables = {
  input: CreateCitedInput,
  condition?: ModelCitedConditionInput | null,
};

export type CreateCitedMutation = {
  createCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};

export type UpdateCitedMutationVariables = {
  input: UpdateCitedInput,
  condition?: ModelCitedConditionInput | null,
};

export type UpdateCitedMutation = {
  updateCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};

export type DeleteCitedMutationVariables = {
  input: DeleteCitedInput,
  condition?: ModelCitedConditionInput | null,
};

export type DeleteCitedMutation = {
  deleteCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};

export type GetArticleTokensQueryVariables = {
  article: string,
};

export type GetArticleTokensQuery = {
  getArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type ListArticleTokenssQueryVariables = {
  article?: string | null,
  filter?: ModelArticleTokensFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListArticleTokenssQuery = {
  listArticleTokenss:  {
    __typename: "ModelArticleTokensConnection",
    items:  Array< {
      __typename: "ArticleTokens",
      article: string,
      tokens: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFactualTokensQueryVariables = {
  ds: string,
};

export type GetFactualTokensQuery = {
  getFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type ListFactualTokenssQueryVariables = {
  ds?: string | null,
  filter?: ModelFactualTokensFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFactualTokenssQuery = {
  listFactualTokenss:  {
    __typename: "ModelFactualTokensConnection",
    items:  Array< {
      __typename: "FactualTokens",
      ds: string,
      tokens: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCitedQueryVariables = {
  ds_article: string,
};

export type GetCitedQuery = {
  getCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};

export type ListCitedsQueryVariables = {
  ds_article?: string | null,
  filter?: ModelCitedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCitedsQuery = {
  listCiteds:  {
    __typename: "ModelCitedConnection",
    items:  Array< {
      __typename: "Cited",
      ds_article: string,
      label: boolean,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateArticleTokensSubscription = {
  onCreateArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type OnUpdateArticleTokensSubscription = {
  onUpdateArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type OnDeleteArticleTokensSubscription = {
  onDeleteArticleTokens:  {
    __typename: "ArticleTokens",
    article: string,
    tokens: string,
  } | null,
};

export type OnCreateFactualTokensSubscription = {
  onCreateFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type OnUpdateFactualTokensSubscription = {
  onUpdateFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type OnDeleteFactualTokensSubscription = {
  onDeleteFactualTokens:  {
    __typename: "FactualTokens",
    ds: string,
    tokens: string,
  } | null,
};

export type OnCreateCitedSubscription = {
  onCreateCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};

export type OnUpdateCitedSubscription = {
  onUpdateCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};

export type OnDeleteCitedSubscription = {
  onDeleteCited:  {
    __typename: "Cited",
    ds_article: string,
    label: boolean,
  } | null,
};
