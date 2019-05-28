import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../../../app/services/file.service';
import {saveAs} from 'file-saver';
import { fadeLateral } from '../../../admin/animation/animation';

const uri = 'http://localhost:3050/file/upload';
@Component({
    selector: 'admin-upload-file',
    templateUrl: './upload-file.component.html',
    providers:[FileService],
    animations: [fadeLateral]
})
export class UploadFileComponent {

    public uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

        constructor(private _fileService:FileService){

        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            //console.log(response);
            //this.attachmentList.push(JSON.parse(response));
            //console.log(typeOf(response));
            //this.attachmentList.push(file);
            console.log(item);
            console.log(item.file);
            console.log(item.file.uploadname);
            console.log(headers);
        }
    }

    download(index){
        var filename = this.attachmentList[index].uploadname;
        console.log(filename);

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
}