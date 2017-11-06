var gulp=require("gulp")
var webserver=require("gulp-webserver")
var fs=require("fs")

var datas=fs.readFileSync("./data.json").toString()
console.log(datas)

gulp.task("httpserver",function(){
    gulp.src(".")
        .pipe(webserver({
            port:8080,
            middleware:function(request,response,next){
                var method=request.method;
                 response.setHeader("Access-Control-Allow-Origin","*")
                 response.setHeader("content-type","application/json;charset=utf-8")
                response.end(datas)
            }
        }))
})

gulp.task("default",["httpserver"])