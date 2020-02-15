// tslint:disable
// this is an auto generated file. This will be overwritten

export const createArticleTokens = `mutation CreateArticleTokens(
  $input: CreateArticleTokensInput!
  $condition: ModelArticleTokensConditionInput
) {
  createArticleTokens(input: $input, condition: $condition) {
    article
    tokens
  }
}
`;
export const updateArticleTokens = `mutation UpdateArticleTokens(
  $input: UpdateArticleTokensInput!
  $condition: ModelArticleTokensConditionInput
) {
  updateArticleTokens(input: $input, condition: $condition) {
    article
    tokens
  }
}
`;
export const deleteArticleTokens = `mutation DeleteArticleTokens(
  $input: DeleteArticleTokensInput!
  $condition: ModelArticleTokensConditionInput
) {
  deleteArticleTokens(input: $input, condition: $condition) {
    article
    tokens
  }
}
`;
export const createFactualTokens = `mutation CreateFactualTokens(
  $input: CreateFactualTokensInput!
  $condition: ModelFactualTokensConditionInput
) {
  createFactualTokens(input: $input, condition: $condition) {
    ds
    tokens
  }
}
`;
export const updateFactualTokens = `mutation UpdateFactualTokens(
  $input: UpdateFactualTokensInput!
  $condition: ModelFactualTokensConditionInput
) {
  updateFactualTokens(input: $input, condition: $condition) {
    ds
    tokens
  }
}
`;
export const deleteFactualTokens = `mutation DeleteFactualTokens(
  $input: DeleteFactualTokensInput!
  $condition: ModelFactualTokensConditionInput
) {
  deleteFactualTokens(input: $input, condition: $condition) {
    ds
    tokens
  }
}
`;
export const createCited = `mutation CreateCited(
  $input: CreateCitedInput!
  $condition: ModelCitedConditionInput
) {
  createCited(input: $input, condition: $condition) {
    ds_article
    label
  }
}
`;
export const updateCited = `mutation UpdateCited(
  $input: UpdateCitedInput!
  $condition: ModelCitedConditionInput
) {
  updateCited(input: $input, condition: $condition) {
    ds_article
    label
  }
}
`;
export const deleteCited = `mutation DeleteCited(
  $input: DeleteCitedInput!
  $condition: ModelCitedConditionInput
) {
  deleteCited(input: $input, condition: $condition) {
    ds_article
    label
  }
}
`;
