import React, { useState, useEffect } from "react";
import Multiselect from 'multiselect-react-dropdown'; // Importing the new dropdown component

interface User {
   userId: string;
   userName: string;
   userRole?: string; // Add userRole to the interface
}

interface FilterMultiSelectProps {
   users: User[];
   selectedUsers?: User[];
   onSelectionChange?: (selectedUsers: User[]) => void;
}

export function FilterMultiSelect({ users, selectedUsers = [], onSelectionChange }: FilterMultiSelectProps) {
   const [selectedUserIds, setSelectedUserIds] = useState<User[]>(selectedUsers);

   // Update local state when selectedUsers prop changes
   useEffect(() => {
      setSelectedUserIds(selectedUsers);
   }, [selectedUsers]);

   // Filter users to only include those with role "user"
   const filteredUsers = users.filter(user => user.userRole === "user");

   const handleSelectionChange = (selectedList: User[], selectedItem: User) => {
      setSelectedUserIds(selectedList);
      if (onSelectionChange) {
         onSelectionChange(selectedList);
      }
   };

   return (
      <div className="card flex justify-content-center">
         <Multiselect 
            options={filteredUsers} // Pass filtered users (only role "user")
            selectedValues={selectedUserIds} // Set selected values
            onSelect={handleSelectionChange} // Handle selection
            onRemove={handleSelectionChange} // Handle removal
            displayValue="userName" // Display user names
            placeholder="Seleccionar usuarios"
            className="w-full"
         />
      </div>
   );
}
