export function getStatusColor(status: string) {
  switch (status) {
    case "Alive":
      return { color: "green" };
    case "Dead":
      return { color: "red" };
    default:
      return { color: "grey" };
  }
}
