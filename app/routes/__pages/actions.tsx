/* eslint-disable no-console */
import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { CSSProperties, useState } from 'react';

import { actionCode, formCode } from '~/code/actions';
import Button from '~/components/Button';
import Code from '~/components/Code';
import Input from '~/components/Input';

export const loader: LoaderFunction = async () => {
  console.log('LOADER');
  return {};
};

export const action: ActionFunction = async params => {
  const formData = await params.request.formData();
  if (await formData.has('name')) {
    console.log('PERSON FORM');
  } else if (await formData.has('company')) {
    console.log('ORGANIZATION FORM');
  }
  return {};
};

export default function ActionsPage(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  const [company, setCompany] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const codePartsStyle: CSSProperties = { margin: '18px 0' };

  return (
    <div>
      <section className="pageContent">
        <h2>Actions</h2>
        <p>
          Podobnie jak loader, akcja jest funkcją serwera służącą wyłącznie do obsługi mutacji
          danych i innych działań. Jeśli do ścieżki zostanie wysłane żądanie inne niż GET, to akcja
          jest wywoływana przed loaderami.
        </p>
        <p>Akcje mają to samo API co loadery, jedyną różnicą jest to, kiedy są wywoływane.</p>
        <Code customStyle={codePartsStyle}>{formCode}</Code>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px' }}>
          <Form
            method="post"
            name="person"
            style={{
              marginBottom: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
            PERSON
            <Input value={name} onChange={setName} name="name" placeholder="name" />
            <Input value={surname} onChange={setSurname} name="surname" placeholder="surname" />
            <Button type="submit">Submit</Button>
          </Form>
          <Form
            method="post"
            name="organization"
            style={{ marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            ORGANIZATION
            <Input value={company} onChange={setCompany} name="company" placeholder="company" />
            <Input value={address} onChange={setAddress} name="address" placeholder="address" />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
        <Code customStyle={codePartsStyle}>{actionCode}</Code>
      </section>
    </div>
  );
}
