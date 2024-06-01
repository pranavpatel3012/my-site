export const ExplorerConfig = {
  sortFn: (a: any, b: any) => {
    // Sort order: folders first, then files. Sort folders and files alphabetically
    if ((!a.file && !b.file) || (a.file && b.file)) {
      // if display name is date then try to parse if and show the latest on top
      let a_date = new Date(a.displayName)
      let b_date = new Date(b.displayName)

      if (a_date.toString() != "Invalid Date" && b_date.toString() != "Invalid Date") {
        if (a_date > b_date) {
          return -1
        } else {
          return 1
        }
      }

      // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
      // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A

      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    if (a.file && !b.file) {
      return 1
    } else {
      return -1
    }
  },
}
