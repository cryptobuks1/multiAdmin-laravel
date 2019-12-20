<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>

                        <div class="card-tools">
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-toggle="modal"
                                data-target="#addUser"
                            >
                                <i class="fas fa fa-user-plus"></i>
                                Add New
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>175</td>
                                    <td>Mike Doe</td>
                                    <td>11-7-2014</td>
                                    <td>
                                        <span class="tag tag-danger"
                                            >Denied</span
                                        >
                                    </td>
                                    <td>
                                        <a
                                            class="btn btn-primary btn-sm"
                                            href="#"
                                        >
                                            <i class="fas fa-pencil-alt"> </i>
                                            Edit
                                        </a>
                                        <a
                                            class="btn btn-danger btn-sm"
                                            href="#"
                                        >
                                            <i class="fas fa-trash"> </i>
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- Modal -->
        <add-new-user></add-new-user>
    </div>
    <!-- /.maindiv -->
</template>

<script>
export default {
    mounted() {
        console.log("Users Component mounted.");
    }
};
</script>
