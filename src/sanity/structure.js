// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Blog
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
            ])
        ),
      S.divider(),

      // Services
      S.listItem()
        .title("Services")
        .child(S.documentTypeList("service").title("All Services")),

      S.divider(),

      // Case Studies
      S.listItem()
        .title("Case Studies")
        .child(S.documentTypeList("caseStudy").title("All Case Studies")),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "post",
            "category",
            "author",
            "service",
            "caseStudy",
          ].includes(item.getId())
      ),
    ]);