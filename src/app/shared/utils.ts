import {MatCheckboxChange} from '@angular/material/checkbox';

export function select_group(rolePermission: any, event: MatCheckboxChange) {
  rolePermission.permissionModels.forEach(permission => {
    permission.hasStorePermision = event.checked;
    permission.hasDestroyPermission = event.checked;
    permission.hasUpdatePermission = event.checked;
    permission.hasIndexPermission = event.checked;
    permission.hasShowPermission = event.checked;
    permission.checkAll = event.checked;
  });
}

export function select_access(permissionModel: any, event: MatCheckboxChange) {
  permissionModel.hasIndexPermission = event.checked;
  permissionModel.hasStorePermision = event.checked;
  permissionModel.hasShowPermission = event.checked;
  permissionModel.hasUpdatePermission = event.checked;
  permissionModel.hasDestroyPermission = event.checked;
}
