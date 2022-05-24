export const metaFunctionExample = `export const meta: MetaFunction = ({ data, params }) => {
  if (!data) {
    return {
      title: "Missing ID",
      description: \`There is no order with the ID of \${params.orderId}.\`,
    };
  }

  const { order } = data as LoaderData;
  return {
    title: \`Order: \${order.id}\`,
    description: order.summary,
  };
};`;
