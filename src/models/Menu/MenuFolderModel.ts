import { v4 as uuidv4 } from 'uuid';

export class MenuFolderModel implements MenuFolder {
  _id: string = uuidv4();
  _isExpanded: boolean = false;

  id: number;
  parentFolderId: number;
  folderName: string;
  photo: string;

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.parentFolderId = params.parentFolderId || 1;
    this.folderName = params.folderName || '';
    this.photo = params.photo || '';
  }

  get isNew() {
    return this.id ? false : true;
  }
}

interface MenuFolder {
  id: number;
  parentFolderId: number;
  folderName: string;
}
