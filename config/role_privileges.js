module.exports = {
    groups: [
        {
            id: "users",
            name: "Users",
        },
        {
            id: "roles",
            name: "Roles",
        },
        {
            id: "categories",
            name: "Categories",
        },
        {
            id: "audit_logs",
            name: "Audit Logs",
        }
    ],
    privileges: [
        {
            key: "user_view",
            name: "User View",
            group: "users",
        },
        {
            key: "user_create",
            name: "User Create",
            group: "users",
        },
        {
            key: "user_update",
            name: "User Update",
            group: "users",
        },
        {
            key: "user_delete",
            name: "User Delete",
            group: "users",
        },

        {
            key: "role_view",
            name: "Role View",
            group: "roles",
        },
        {
            key: "role_create",
            name: "Role Create",
            group: "roles",
        },
        {
            key: "role_update",
            name: "Role Update",
            group: "roles",
        },
        {
            key: "role_delete",
            name: "Role Delete",
            group: "roles",
        },

        {
            key: "category_view",
            name: "Category View",
            group: "categories",
        },
        {
            key: "category_create",
            name: "Category Create",
            group: "categories",
        },
        {
            key: "category_update",
            name: "Category Update",
            group: "categories",
        },
        {
            key: "category_delete",
            name: "Category Delete",
            group: "categories",
        },

        {
            key: "audit_log_view",
            name: "Audit Log View",
            group: "audit_logs",
        }
    ]
}