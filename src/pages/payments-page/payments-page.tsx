import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { AgGridReact } from 'ag-grid-react';
import { Page } from '@ui-kit/page/page';
// import { type ColDef } from 'ag-grid';
// import { Title } from '@ui-kit/typography/title/title';

export const PaymentsPage: React.FC = () => {
	// const { t } = useTranslation();
	// // Row Data: The data to be displayed.
	// const [rowData, setRowData] = useState([
	// 	{
	// 		mission: 'Voyager',
	// 		company: 'NASA',
	// 		location: 'Cape Canaveral',
	// 		date: '1977-09-05',
	// 		rocket: 'Titan-Centaur ',
	// 		price: 86580000,
	// 		successful: true,
	// 	},
	// 	{
	// 		mission: 'Apollo 13',
	// 		company: 'NASA',
	// 		location: 'Kennedy Space Center',
	// 		date: '1970-04-11',
	// 		rocket: 'Saturn V',
	// 		price: 3750000,
	// 		successful: false,
	// 	},
	// 	{
	// 		mission: 'Falcon 9',
	// 		company: 'SpaceX',
	// 		location: 'Cape Canaveral',
	// 		date: '2015-12-22',
	// 		rocket: 'Falcon 9',
	// 		price: 9750000,
	// 		successful: true,
	// 	},
	// ]);

	// // Column Definitions: Defines & controls grid columns.
	// const [colDefs, setColDefs] = useState<ColDef[]>([
	// 	{ field: 'mission' },
	// 	{ field: 'company' },
	// 	{ field: 'location' },
	// 	{ field: 'date' },
	// 	{ field: 'price' },
	// 	{ field: 'successful' },
	// 	{ field: 'rocket' },
	// ]);

	return (
		<Page>
			{/* <AgGridReact rowData={rowData} columnDefs={colDefs} /> */}
		</Page>
	);
};
