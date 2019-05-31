import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../../../app/services/file.service';
import {saveAs} from 'file-saver';
import { fadeLateral } from '../../..//admin/animation/animation';

const uri = 'http://localhost:5040/file/upload';
@Component({
    selector: 'admin-upload-file',
    templateUrl: './upload-file.component.html',
    providers:[FileService],
    animations: [fadeLateral]
})
export class UploadFileComponent {

    //private uploader: FileUploader = new FileUploader({ url: uri });
    uploader = new FileUploader({ url: uri, maxFileSize: 1024 * 1024 * 1 });

    attachmentList:any = [];

    constructor(private _fileService:FileService){

        //this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
        //    this.attachmentList.push(response.file);
        //}

        /*this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
            this.attachmentList.push(JSON.parse(response));
            //...
        }*/

    }

    /*ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => {
          console.log('***** onAfterAddingFile ******')
          console.log('file ', file)
        }

        this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
          console.log('ImageUpload:uploaded:', item, status, response);
          this.attachmentList.push(JSON.parse(response));
        };

        this.uploader.onCompleteAll = () => {
          console.log('******* onCompleteAll *********')
        }

        this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
          console.log('***** onWhenAddingFileFailed ********')
        }
    }*/

    download(index){
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
}