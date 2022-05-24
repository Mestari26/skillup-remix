export const formCode = `<Form method="post" name="person">
  <Input value={name} onChange={setName} name="name" />
  <Input value={surname} onChange={setSurname} name="surname" />
  <Button type="submit">Submit</Button>
</Form>`;

export const actionCode = `export const action: ActionFunction = async params => {
  const formData = await params.request.formData();
  if (await formData.has('name')) {
    console.log('PERSON FORM');
  } else if (await formData.has('company')) {
    console.log('ORGANIZATION FORM');
  }
  return {};
};`;
