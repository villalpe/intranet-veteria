import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../../../app/services/file.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:3050/file/upload';
@Component({
    selector: 'admin-download-file',
    templateUrl: './download-file.component.html',
    providers:[FileService]
})
export class DownloadFileComponent {

    uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

    constructor(private _fileService:FileService){

        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push(JSON.parse(response));
        }
    }

    download(index){
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
}