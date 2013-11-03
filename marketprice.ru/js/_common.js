(window.Lego);
(function (a)
{
	if (!a)
	{
		a = window.Lego = {}
	}
	a.cp = function (f, c, e, b, d)
	{
		a.c("stred/pid=" + f + "/cid=" + c + (e ? "/path=" + e : ""), b, d)
	}
})(window.Lego);



(function (b, a)
{
	
	a.block || (a.block = {});
	a.blockInit || (a.blockInit = function (c, d)
	{
		c = c || document;
		d = d || ".g-js";
		b(c).find(d).each(function ()
		{
			var h = b(this),
				g = this.onclick ? this.onclick() : {},
				e = g.name || "",
				f = a.block[e];
			if (f && !h.data(e))
			{
				f.call(h, g);
				h.data(e, true).addClass(e + "_js_inited")
			}
		})
	});
	a.blockInitBinded || (a.blockInitBinded = !! b(document).ready(function ()
	{
		a.blockInit()
	}))
})(jQuery, window.Lego);

(function (c)
{
    var a = ["DOMMouseScroll", "mousewheel"];
    c.event.special.mousewheel = {
        setup: function ()
        {
            if (this.addEventListener)
            {
                for (var d = a.length; d;)
                {
                    this.addEventListener(a[--d], b, false)
                }
            }
            else
            {
                this.onmousewheel = b
            }
        },
        teardown: function ()
        {
            if (this.removeEventListener)
            {
                for (var d = a.length; d;)
                {
                    this.removeEventListener(a[--d], b, false)
                }
            }
            else
            {
                this.onmousewheel = null
            }
        }
    };
    c.fn.extend(
    {
        mousewheel: function (d)
        {
            return d ? this.bind("mousewheel", d) : this.trigger("mousewheel")
        },
        unmousewheel: function (d)
        {
            return this.unbind("mousewheel", d)
        }
    });

    function b(f)
    {
        var d = [].slice.call(arguments, 1),
            g = 0,
            e = true;
        f = c.event.fix(f || window.event);
        f.type = "mousewheel";
        if (f.wheelDelta)
        {
            g = f.wheelDelta / 120
        }
        if (f.detail)
        {
            g = -f.detail / 3
        }
        d.unshift(f, g);
        return c.event.handle.apply(this, d)
    }
})(jQuery);

jQuery.fn.sliderBox = function (y)
{
    var w = $(this);
    var x = w.children(".container");
    var u = x.children(".list");
    var o = u.find(".item");
    var y = y || {};
    var g = y.speed || "slow";
    var m = y["max-width"] || 120;
    var j = y.scrollable || false;
    var v = "hidden",
        k = "invisible";
    var f = document.onresize ? document : window;
    var d = {
        first: 0,
        last: 0,
        length: o.length
    };
    if (j)
    {
        w.addClass("narrowed");
        x.before('<div class="arrows"><i class="prev" unselectable="on"><i class="triangle disabled">&lsaquo;</i></i><i class="next" unselectable="on"><i class="triangle">&rsaquo;</i></i></div>')
    }
    var r = w.find(".arrows > i");
    o.bind("slide.show", function ()
    {
        $(this).removeClass(k).find("img[data-src]").each(function ()
        {
            var c = $(this);
            c.attr("src", c.attr("data-src")).removeAttr("data-src")
        })
    }).bind("slide.hide", function ()
    {
        $(this).addClass(k)
    });

    function i()
    {
        if (w && !w.hasClass("slide-box"))
        {
            w.addClass("slide-box");
            u.find("." + v).removeClass(v)
        }
        var c = x.width();
        if (c == 0)
        {
            return false
        }
        var l = Math.floor(c / m);
        d.last = d.first + l - 1;
        var h = Math.min(d.first, d.length - l);
        if (h != d.first)
        {
            d.first = h;
            d.last = d.first + l - 1
        }
        e();
        o.children("table").css(
        {
            width: Math.ceil(c / l) + "px"
        });
        x.css(
        {
            height: u.height() + "px"
        });
        u.css(
        {
            left: "-" + o.get(h).offsetLeft + "px"
        });
        a();
        z();
        if (d.length <= l)
        {
            r.hide()
        }
        else
        {
            r.show()
        }
    }
    $(f).resize(i);
    $(i);

    function b(h)
    {
        var l = d.last - d.first;
        if (h < 0)
        {
            h = 0
        }
        if (h >= o.length - l)
        {
            h = o.length - l - 1
        }
        var c = o.eq(h);
        if (c.length == 1)
        {
            d.last = h + d.last - d.first;
            d.first = h;
            e();
            u.stop().animate(
            {
                left: "-" + c.get(0).offsetLeft + "px"
            }, g, "swing", function ()
            {
                z();
                a()
            })
        }
    }

    function z()
    {
        if (d.first == 0)
        {
            r.eq(0).children(".triangle").addClass("disabled")
        }
        if (d.first > 0)
        {
            r.eq(0).children(".triangle").removeClass("disabled")
        }
        if (d.last == d.length - 1)
        {
            r.eq(1).children(".triangle").addClass("disabled")
        }
        if (d.last < d.length - 1)
        {
            r.eq(1).children(".triangle").removeClass("disabled")
        }
    }

    function e()
    {
        o.slice(d.first, d.last + 1).trigger("slide.show")
    }

    function a()
    {
        o.slice(0, Math.max(0, d.first - 1)).trigger("slide.hide");
        o.slice(d.last + 1, o.length).trigger("slide.hide")
    }

    function q()
    {
        var h = d.last - d.first;
        var c = Math.max(0, d.first - h);
        b(c)
    }
    r.eq(0).click(function ()
    {
        if (!$(this).children(".triangle").hasClass("disabled"))
        {
            q()
        }
    });

    function s()
    {
        var h = d.last - d.first;
        var c = Math.min(d.last, d.length - h - 1);
        b(c)
    }
    r.eq(1).click(function ()
    {
        if (!$(this).children(".triangle").hasClass("disabled"))
        {
            s()
        }
    });
    if (j)
    {
        x.mousewheel(function (c, h)
        {
            b(d.first - Math.round(Math.abs(h) / h));
            return false
        })
    }
    r.mousedown(function (c)
    {
        c.preventDefault();
        return false
    })
};


jQuery.fn.sliderBox2 = function (yy)
{
    var w = $(this);
    var x = w.children(".container");
    var u = x.children(".list");
    var o = u.find(".item");
    var yy = yy || {};
    var g = yy.speed || "slow";
    var m = yy["max-width"] || 200;
    var j = yy.scrollable || false;
    var v = "hidden",
        k = "invisible";
    var f = document.onresize ? document : window;
    var d = {
        first: 0,
        last: 0,
        length: o.length
    };
    if (j)
    {
        w.addClass("narrowed");
        x.before('<div class="arrows"><i class="prev" unselectable="on"><i class="triangle disabled">&lsaquo;</i></i><i class="next" unselectable="on"><i class="triangle">&rsaquo;</i></i></div>')
    }
    var r = w.find(".arrows > i");
    o.bind("slide.show", function ()
    {
        $(this).removeClass(k).find("img[data-src]").each(function ()
        {
            var c = $(this);
            c.attr("src", c.attr("data-src")).removeAttr("data-src")
        })
    }).bind("slide.hide", function ()
    {
        $(this).addClass(k)
    });

    function i()
    {
        if (w && !w.hasClass("slide-box"))
        {
            w.addClass("slide-box");
            u.find("." + v).removeClass(v)
        }
        var c = x.width();
        if (c == 0)
        {
            return false
        }
        var l = Math.floor(c / m);
        d.last = d.first + l - 1;
        var h = Math.min(d.first, d.length - l);
        if (h != d.first)
        {
            d.first = h;
            d.last = d.first + l - 1
        }
        e();
        o.children("table").css(
        {
            width: Math.ceil(c / l) + "px"
        });
        x.css(
        {
            height: u.height() + "px"
        });
        u.css(
        {
            left: "-" + o.get(h).offsetLeft + "px"
        });
        a();
        z();
        if (d.length <= l)
        {
            r.hide()
        }
        else
        {
            r.show()
        }
    }
    $(f).resize(i);
    $(i);

    function b(h)
    {
        var l = d.last - d.first;
        if (h < 0)
        {
            h = 0
        }
        if (h >= o.length - l)
        {
            h = o.length - l - 1
        }
        var c = o.eq(h);
        if (c.length == 1)
        {
            d.last = h + d.last - d.first;
            d.first = h;
            e();
            u.stop().animate(
            {
                left: "-" + c.get(0).offsetLeft + "px"
            }, g, "swing", function ()
            {
                z();
                a()
            })
        }
    }

    function z()
    {
        if (d.first == 0)
        {
            r.eq(0).children(".triangle").addClass("disabled")
        }
        if (d.first > 0)
        {
            r.eq(0).children(".triangle").removeClass("disabled")
        }
        if (d.last == d.length - 1)
        {
            r.eq(1).children(".triangle").addClass("disabled")
        }
        if (d.last < d.length - 1)
        {
            r.eq(1).children(".triangle").removeClass("disabled")
        }
    }

    function e()
    {
        o.slice(d.first, d.last + 1).trigger("slide.show")
    }

    function a()
    {
        o.slice(0, Math.max(0, d.first - 1)).trigger("slide.hide");
        o.slice(d.last + 1, o.length).trigger("slide.hide")
    }

    function q()
    {
        var h = d.last - d.first;
        var c = Math.max(0, d.first - h);
        b(c)
    }
    r.eq(0).click(function ()
    {
        if (!$(this).children(".triangle").hasClass("disabled"))
        {
            q()
        }
    });

    function s()
    {
        var h = d.last - d.first;
        var c = Math.min(d.last, d.length - h - 1);
        b(c)
    }
    r.eq(1).click(function ()
    {
        if (!$(this).children(".triangle").hasClass("disabled"))
        {
            s()
        }
    });
    if (j)
    {
        x.mousewheel(function (c, h)
        {
            b(d.first - Math.round(Math.abs(h) / h));
            return false
        })
    }
    r.mousedown(function (c)
    {
        c.preventDefault();
        return false
    })
};
