export default function() {
  return {
    visitor: {
      BinaryExpression({ node }) {
        if (node.operator == "==") node.operator = "==="
        if (node.operator == "!=") node.operator = "!=="
      }
    }
  }
}
