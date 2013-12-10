import sys
reload(sys)
sys.setdefaultencoding("utf8")

import os.path
import re
#import memcache
#import torndb
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("topic/index.html")

app = tornado.web.Application([
    (r"/",MainHandler),
    ])

class Application(tornado.web.Application):
    """docstring for Application"""
    def __init__(self):
        settings = dict(
            blog_title = u"lab204",
            template_path = os.path.join(os.path.dirname(__file__), "templates"),
            static_path = os.path.join(os.path.dirname(__file__), "static"),
            xsrf_cookies = True,
            cookie_secret = "cookie_secret_code",
            login_url = "/login",
            autoescape = None,
            #jinja2 = Environment(loader = FileSystemLoader(os.path.join(os.path.dirname(__file__), "templates")), trim_blocks = True),
            reserved = ["user", "topic", "home", "setting", "forgot", "login", "logout", "register", "admin"],
        )
        handlers = [
            (r"/",MainHandler),

            (r"/(favicon\.ico)", tornado.web.StaticFileHandler, dict(path = settings["static_path"])),
            (r"/(sitemap.*$)", tornado.web.StaticFileHandler, dict(path = settings["static_path"])),
            (r"/(bdsitemap\.txt)", tornado.web.StaticFileHandler, dict(path = settings["static_path"])),
        ]




        tornado.web.Application.__init__(self,handlers,**settings)

def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(Application())
    http_server.listen(8888)
    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()