function editItem(productId) {
    $.ajax({
        type: "GET",
        url: `/product/detail/${productId}`,
        success: function (rs) {
          if (rs.s === 200) {
            let productInfo = rs.data;
            var formEdit = `
                    <h3>Cập nhật thông tin nhân viên</h3>
                    <form class="row g-3" action="/product/edit" method="post">
                          <div>
                              <input type="text" class="form-control" id="_id" name="_id" value="${productInfo._id}" style="display:none">
                          </div>
                        <div class="col-md-6">
                        <label for="tensp" class="form-label">Tên Sản Phẩm</label>
                        <input type="text" class="form-control" id="tensp" name="tensp" placeholder="Nhập tên" value="${productInfo.name}">
                        </div>
                        <div class="col-md-6">
                        <label for="masp" class="form-label">Mã sản phẩm</label>
                        <input type="text" class="form-control" id="masp" name="masp" placeholder="Nhập Mã sản phẩm" value="${productInfo.email}">
                        </div>
                        <div class="col-6">
                        <label for="age" class="form-label">Age</label>
                        <input type="text" class="form-control" id="age" name="age" placeholder="Nhập tuổi" value="${productInfo.age}">
                        </div>
                        <div class="col-12">
                        <button type="submit" class="btn btn-primary">Cập nhật</button>
                        </div>
                    </form>
                    `;
            $("#formEdit").html(formEdit);
          } else {
            alert(rs.msg);
          }
        },
      });
    }