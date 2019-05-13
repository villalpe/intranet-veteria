export class Invoice{

	constructor(
		public _id: string,
		public name_provider: string,
		public address_provider: string,
		public invoice_number: string,
		public description: string,
		public quantity: number,
		public total: number,
		public year: number,
		public month: number,
		public status: boolean,
		public image: string
		){
	}
}