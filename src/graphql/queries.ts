// tslint:disable
// this is an auto generated file. This will be overwritten

export const getArticleTokens = `query GetArticleTokens($article: String!) {
  getArticleTokens(article: $article) {
    article
    tokens
  }
}
`;
export const listArticleTokenss = `query ListArticleTokenss(
  $article: String
  $filter: ModelArticleTokensFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listArticleTokenss(
    article: $article
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      article
      tokens
    }
    nextToken
  }
}
`;
export const getFactualTokens = `query GetFactualTokens($ds: String!) {
  getFactualTokens(ds: $ds) {
    ds
    tokens
  }
}
`;
export const listFactualTokenss = `query ListFactualTokenss(
  $ds: String
  $filter: ModelFactualTokensFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFactualTokenss(
    ds: $ds
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds
      tokens
    }
    nextToken
  }
}
`;
export const getCited = `query GetCited($ds_article: String!) {
  getCited(ds_article: $ds_article) {
    ds_article
    label
  }
}
`;
export const listCiteds = `query ListCiteds(
  $ds_article: String
  $filter: ModelCitedFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCiteds(
    ds_article: $ds_article
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      ds_article
      label
    }
    nextToken
  }
}
`;
