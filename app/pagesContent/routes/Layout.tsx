import classNames from 'classnames';
import { useState } from 'react';

type LayoutPart = 'root' | 'sales' | 'invoices' | 'id_invoice' | null;

const LAYOUT_PARTS: { name: string; key: LayoutPart }[] = [
  { name: '<Root />', key: 'root' },
  { name: '<Sales />', key: 'sales' },
  { name: '<Invoices />', key: 'invoices' },
  { name: '<Invoice id={id} />', key: 'id_invoice' },
];

export default function Layout(): JSX.Element {
  const [selectedLayoutPart, setSelectedLayoutPart] = useState<LayoutPart>(null);

  const isSelectedPart = (key: LayoutPart): string =>
    key === selectedLayoutPart ? 'selectedLayoutPart' : '';

  return (
    <div>
      <h4>Layout</h4>
      <ul style={{ marginBottom: '24px' }}>
        <li>
          Layout <i>sales.jsx</i> + Content <i>sales/index.jsx</i>
        </li>
        <li>
          Layout bez ścieżki <i>__name</i>
        </li>
      </ul>
      <div className="layoutExampleNavigation">
        {LAYOUT_PARTS.map(option => (
          <div
            className="layoutExampleNavigationOption"
            onMouseEnter={() => setSelectedLayoutPart(option.key)}
            onMouseLeave={() => setSelectedLayoutPart(null)}
            key={option.key}>
            {option.name}
          </div>
        ))}
      </div>
      <div className="layoutExampleURL">
        <span>https://</span>
        <span className={classNames(isSelectedPart('root'), 'rootUrl')}>remix-page.com/</span>
        <span className={classNames(isSelectedPart('sales'), 'salesUrl')}>sales/</span>
        <span className={classNames(isSelectedPart('invoices'), 'invoicesUrl')}>invoices/</span>
        <span className={classNames(isSelectedPart('id_invoice'), 'idInvoiceUrl')}>51241</span>
      </div>
      <div className={classNames('layoutExampleWrapper', isSelectedPart('root'))}>
        <div className="layoutExampleSidebar">
          <div>Dashboard</div>
          <div className="layoutExampleSidebarOptionSelected">Sales</div>
          <div>Customers</div>
          <div>Settings</div>
        </div>
        <div className={classNames('layoutExampleMain', isSelectedPart('sales'))}>
          <div className="layoutExampleMainHeader">
            {['Overview', 'Invoices', 'Deposits'].map(option => (
              <div
                className={classNames(
                  'layoutExampleMainHeaderOption',
                  option === 'Invoices' && 'layoutExampleMainHeaderOptionSelected'
                )}
                key={option}>
                {option}
              </div>
            ))}
          </div>
          <div className={classNames('layoutExampleListWrapper', isSelectedPart('invoices'))}>
            <div className="layoutExampleList">
              {['#123', '#456', '#789', '#101', '#351', '#441'].map(item => (
                <div key={item} className="layoutExampleListItem">
                  {item}
                </div>
              ))}
            </div>
            <div className={classNames('layoutExampleDetails', isSelectedPart('id_invoice'))}>
              <h4>Details</h4>
              <p>Some description...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
