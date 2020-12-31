export class EmployeeDetails {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public mobileNumber: string = '',
        public latitude: Number = 0,
        public longitude: Number = 0,
        public imageUrl: string = '',
        public id: string = '',
        public department: string = '',
    ) { }
}
export class ImageSnippet {
    constructor(
        public src: string,
        public file: File
    ) { }
}
