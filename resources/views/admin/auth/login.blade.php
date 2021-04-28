
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Registration Page</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

  <link rel="stylesheet" href="{{asset('front/adminlte/plugins/fontawesome-free/css/all.min.css')}}">

  <link rel="stylesheet" href="{{asset('front/adminlte/dist/css/adminlte.min.css')}}" />
</head>
<body class="hold-transition register-page">
<div class="register-box">

    @if(session()->has("invalid"))
        <div class="alert alert-success">{{session()->get("invalid")}}</div>
    @endif

    <div class="card">
    <div class="card-body register-card-body">
      <h3 class="login-box-msg">Логин</h3>

      <form action="{{route("loginStore")}}" method="post">
        @csrf
        <div class="input-group">
          <input type="email" name='email' class="form-control @error('email') is-invalid @enderror" placeholder="Email" value="{{old('email')}}">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        @error("email") <div class="feedback text-danger text-sm ml-1">{{$message}}</div> @enderror
        <div class="input-group mt-3">
          <input type="password" name='password' class="form-control @error('password') is-invalid @enderror" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        @error("password") <div class="feedback text-danger text-sm ml-1">{{$message}}</div> @enderror
        <div class="row">
          <!-- /.col -->
          <div class="col-offset-8 ml-2 mt-2">
            <button type="submit" class="btn btn-primary btn-block btn-sm">Login</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
<!-- /.register-box -->

</body>
</html>
