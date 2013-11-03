<?php header('Content-type: text/html; charset=utf-8')?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>title</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/main.css">

        <script src="http://code.jquery.com/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

        <script type="text/javascript" src="js/fancybox/jquery.fancybox.pack.js"></script>
        <link rel="stylesheet" type="text/css" href="js/fancybox/jquery.fancybox.css" media="screen" />

        <link rel="stylesheet" href="js/example_start_stop.css">
        <script src="js/jquery.lwtCountdown-1.0.js"></script>

        <script src="js/vendor/modernizr-2.6.1.min.js"></script>
        <script src="js/jquery.form.js"></script>
    </head>
    <body>
        <div id="main">

            <!-- header -->
            <header>
                <div class="header-top">
                    <div class="wrapper">
                        Интернет-магазин #1 <span class="spacer">|</span>
                        <a href="#assort">самый широкий ассортимент товаров</a> <span class="spacer">|</span>
                        оплата <img src="images/header-top-pay.png" alt=""> <span class="spacer">|</span>
                        Доставка по всей россии и снг <span class="spacer">|</span>
                        <a href="#guarant">гарантия качества</a> <span class="spacer">|</span>
                        связь 24/7
                    </div>
                </div>

                <!-- -->

                <div class="header-middle">
                    <div class="wrapper">
                        <a href=""><img src="images/header-logo.png" alt="" class="header-logo" /></a>

                        <div class="header-slogan">Интернет-магазин турников №1</div>

                        <a href="#" id="header-recall" class="header-recall button">Закажите звонок</a>


                          <form id="callForm" action="./send.php" method="post">

                            <input type="text" placeholder="Введите Ваше имя" name="name" class="txt name">
    <br>
    <input type="text" name="phone" placeholder="Введите телефон" class="txt phone">
                            <input type="hidden" name="type" value="1">
                            <button type="button" class="callBtn" onclick="formSend1()">Отправить</button>
                            <div class="ug"></div>
                          </form>

                        

                        <div class="header-contacts">
                            <span class="call">Просто позвоните:</span><br />
                            <span class="phone-big">8 (499) 653-71-77,</span> <span class="phone-small">8 (926) 190-02-49</span><br />
                            <span class="time">Время работы: пн-сб. с 10:00 до 20:00 | online-заказ 24ч</span>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>

                <!-- -->

                <div class="header-main">
                    <div class="wrapper">
                        <h1>Интернет-магазин турников и брусьев</h1>
                        <p>мы не просто продаем турники. Мы также дарим вам систему<br /> Высокоэффективных спортивных тренировок на турнике. Быстрый и<br /> гарантированный результат. Разработано профессионалами.</p>                        
                    </div>
                </div>
            </header>

            <div id="wrap">
                <!-- showcase -->
                <div class="showcase">
                    <div class="wrapper">
                        <aside>
                            <div class="order">
                                <form action="./send.php" method="post" id="orderForm1">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input type="hidden" name="type" value="6">
                                    <input type="button" id="" value="Оформите заказ" class="submit button"  onclick="formSend6(1);"/><br />
                                </form>
                            </div>

                            <div class="countdown">
                                <h4>До конца акции осталось:</h4>

                                <div class="example_pane">      
                                    <div id="countdown_dashboard">
                                        <div class="dash days_dash">
                                            <div class="digit">0</div>
                                            <div class="digit">0</div>
                                        </div>

                                        <div class="dash hours_dash">
                                            <div class="digit">0</div>
                                            <div class="digit">0</div>
                                        </div>

                                        <div class="dash minutes_dash">
                                            <div class="digit">0</div>
                                            <div class="digit">0</div>
                                        </div>
                                    </div>

                                    <div class="dash_controls">
                                        <span class="days">дней</span>
                                        <span class="hours">часов</span>
                                        <span class="minutes">минут</span>
                                    </div>

                                    <script language="javascript" type="text/javascript">
                                        // Set the Countdown
                                        jQuery(document).ready(function() {
                                            $('#countdown_dashboard').countDown({
                                                targetOffset: {
                                                    'day':      1,
                                                    'month':    1,
                                                    'year':     0,
                                                    'hour':     1,
                                                    'min':      1,
                                                    'sec':      1
                                                }
                                            });
                                        });

                                        // Stop countdown
                                        function stop() {
                                            $('#countdown_dashboard').stopCountDown();
                                        }

                                        // Start countdown
                                        function start() {
                                            $('#countdown_dashboard').startCountDown();
                                        }

                                        // reset and start
                                        function reset() {
                                            $('#countdown_dashboard').stopCountDown();
                                            $('#countdown_dashboard').setCountDown({
                                                targetOffset: {
                                                    'day':      1,
                                                    'month':    1,
                                                    'year':     0,
                                                    'hour':     1,
                                                    'min':      1,
                                                    'sec':      1
                                                }
                                            });             
                                            $('#countdown_dashboard').startCountDown();
                                        }
                                    </script>
                                </div>
                            </div>
                        </aside>

                        <div class="showcase-description">
                            <h2>Тренажер 4 в 1: турник, брусья, пресс, узкий хват</h2>

                            <p>это 10 базовых упражнения, прокачка 100% мышц торса.<br />
                            сьемная конструкция</p>

                            <div class="showcase-item">
                                <div class="view">
                                    <img src="images/tmp/s1.jpg" alt="">
                                </div>

                                <div class="description">
                                    <span class="old">Старая цена: 5400 Рублей</span>
                                    <div class="current">
                                        Новая цена:<br />
                                        <strong>3950Р</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- features -->
                <div class="features">
                    <span class="box-title"><span>НАШИ преимущества</span></span>

                    <div class="wrapper">
                        <div class="features-list">
                            <div class="item first">
                                <img src="images/f1.png" alt="">
                                <p>Бесплатное фитнес сопровождение каждого клиента. 100% результат</p>
                            </div>

                            <div class="item">
                                <img src="images/f2.png" alt="">
                                <p>Надежность и безопасность конструкции всего ассортимента</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/f3.png" alt="">
                                <p>Установка турника и поддержка клиента по всем вопросам эксплуатации</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/f4.png" alt="">
                                <p>Бесплатная доставка по РФ при заказе от 6 т.р. (например, турник + утяжелитель, который ускорит результат)</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/f5.png" alt="">
                                <p>Гарантия качества – 24 месяца. Вы можете обменять товар по гарантии.</p>
                            </div>
                        </div>

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm2" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(2)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- assortment -->
                <div class="assortment">
                    <span class="box-title"><span>НАШ ассортимент</span></span>

                    <div class="wrapper">
                        <div class="assortment-list">                            
                            <div class="item even">
                                <span class="title">Турник 3 хвата: широкий + узкий + средний</span>

                                <div class="view">
                                    <img src="images/a1.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(1,'Турник 3 хвата: широкий + узкий + средний')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Турник 3 хвата: широкий + узкий + средний')">Сделать заказ</a>
                            </div>

                            <div class="item odd">
                                <span class="title">Турник 2 хвата: широкий + узкий </span>

                                <div class="view">
                                    <img src="images/a2.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(2, 'Турник 2 хвата: широкий + узкий')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Турник 2 хвата: широкий + узкий')">Сделать заказ</a>
                            </div>
                            
                            <div class="item even">
                                <span class="title">Тренажер 2 в 1: турник + Брусья<br />&nbsp;</span>

                                <div class="view">
                                    <img src="images/a3.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(3, 'Тренажер 2 в 1: турник + брусья')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Тренажер 2 в 1: турник + брусья')">Сделать заказ</a>
                            </div>

                            <div class="item odd">
                                <span class="title">Тренажер 4 в 1 (разборный): турник + Брусья + пресс + Узкий хват</span>

                                <div class="view">
                                    <img src="images/a4.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(6, 'Тренажер 4 в 1 (разборный): турник + брусья + пресс + узкий хват')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Тренажер 4 в 1 (разборный): турник + брусья + пресс + узкий хват')">Сделать заказ</a>
                            </div>
                            
                            <div class="item even">
                                <span class="title">Тренажер 2 в 1: турник + Брусья<br />&nbsp;</span>

                                <div class="view">
                                    <img src="images/a5.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(5, 'Тренажер 2 в 1: турник + Брусья')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Тренажер 2 в 1: турник + Брусья')">Сделать заказ</a>
                            </div>

                            <div class="item odd">
                                <span class="title">Тренажер 4 в 1 (разборный): турник + Брусья + пресс + Узкий хват</span>

                                <div class="view">
                                    <img src="images/a6.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(7, 'Тренажер 4 в 1 (разборный): турник + Брусья + пресс + Узкий хват')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Тренажер 4 в 1 (разборный): турник + Брусья + пресс + Узкий хват')">Сделать заказ</a>
                            </div>
                            
                            <div class="item last">
                                <span class="title">Тренажер 2 в 1: турник + Брусья</span>

                                <div class="view">
                                    <img src="images/a7.jpg" alt="">
                                    <div class="price">
                                        цена<br />
                                        <strong>3600Р</strong>
                                    </div>
                                </div>

                                <a href="#" class="more" onclick="moreOpen(4, 'Тренажер 2 в 1: турник + Брусья')">подробная информация</a>
                                <a href="#" class="buy button" onclick="orderOpen('Тренажер 2 в 1: турник + Брусья')">Сделать заказ</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- facts -->
                <div class="facts">
                    <span class="box-title"><span>Почему турник? Факты</span></span>

                    <div class="wrapper">
                        <div class="features-list">
                            <div class="item first">
                                <img src="images/fa1.png" alt="">
                                <h3>Фигура атлета</h3>
                                <p>Базовые упражнения на турнике формирует атлетическое телосложение, рост мышечной массы спины, бицепса, развивает мышцы брюшного пресса. </p>
                            </div>

                            <div class="item">
                                <img src="images/fa2.png" alt="">
                                <h3>сила и выносливость</h3>
                                <p>Силовая тренировка на турнике увеличивают мышечную силу и выносливость, что положительно сказывается на общем физиологическом состоянии человека. </p>
                            </div>
                            
                            <div class="item">
                                <img src="images/fa3.png" alt="">
                                <h3>чувство счастья</h3>
                                <p>Силовая тренировка повышает на 13% выработку гормона  BDNF стимулирующую развитие нейронов, которые вызывают чувство легкости, ясности, а в конечном итоге – счастья. </p>
                            </div>
                            
                            <div class="item">
                                <img src="images/fa4.png" alt="">
                                <h3>развитие памяти и ума</h3>
                                <p>Исследование директора Центра долголетия Калифорнийского университета, доктора Гери Смолла доказали, что силовые тренировки улучшают кратковременную/долговременную память, развивают способность к концентрации внимания.</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/fa5.png" alt="">
                                <h3>Здоровые кости</h3>
                                <p>Регулярный вис на турнике растягивает и выпрямляет позвоночник, формирует красивую осанку. Министерство здравоохранения РФ рекомендует висеть на перекладине 3 раза в день по 1-3 мин.</p>
                            </div>
                        </div>   

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm3" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(3)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>                     
                    </div>
                </div>

                <!-- feeds -->
                <div class="feeds">
                    <span class="box-title"><span>Отзывы</span></span>

                    <div class="wrapper">
                        <div class="feeds-list">
                            <div class="item even">
                                <img src="images/tmp/a.png" alt="">

                                <span class="title">Ребята качественно установили</span>
                                <span class="name"><strong>Маршалл Давыдов</strong> 22 года,</span>
                                <span class="name">Москва, Тренер</span>

                                <p>Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и</p>
                            </div>
                            
                            <div class="item odd">
                                <img src="images/tmp/a.png" alt="">

                                <span class="title">Ребята качественно установили</span>
                                <span class="name"><strong>Маршалл Давыдов</strong> 22 года,</span>
                                <span class="name">Москва, Тренер</span>

                                <p>Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и</p>
                            </div>
                            
                            <div class="item even">
                                <img src="images/tmp/a.png" alt="">

                                <span class="title">Ребята качественно установили</span>
                                <span class="name"><strong>Маршалл Давыдов</strong> 22 года,</span>
                                <span class="name">Москва, Тренер</span>

                                <p>Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и</p>
                            </div>
                            
                            <div class="item odd">
                                <img src="images/tmp/a.png" alt="">

                                <span class="title">Ребята качественно установили</span>
                                <span class="name"><strong>Маршалл Давыдов</strong> 22 года,</span>
                                <span class="name">Москва, Тренер</span>

                                <p>Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и</p>
                            </div>
                            
                            <div class="item even last">
                                <img src="images/tmp/a.png" alt="">

                                <span class="title">Ребята качественно установили</span>
                                <span class="name"><strong>Маршалл Давыдов</strong> 22 года,</span>
                                <span class="name">Москва, Тренер</span>

                                <p>Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и</p>
                            </div>
                            
                            <div class="item odd last">
                                <img src="images/tmp/a.png" alt="">

                                <span class="title">Ребята качественно установили</span>
                                <span class="name"><strong>Маршалл Давыдов</strong> 22 года,</span>
                                <span class="name">Москва, Тренер</span>

                                <p>Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и</p>
                            </div>
                        </div>

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm4" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(4)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>      
                    </div>
                </div>

                <!-- results -->
                <div class="results">
                    <span class="box-title"><span>Результаты наших успешных клиентов</span></span>

                    <div class="wrapper">
                        <div class="results-list">
                            <div class="item">
                                <img src="images/tmp/r.png" alt="">
                                <div class="item-wrapper">
                                    <span class="title">Иванов эдуард эполлитович</span>
                                    <span class="stats">г. Москва, 12 недель тренировок</span>
                                    <p>Базовые упражнения на турнике формирует атлетическое телосложение, рост мышечной массы спины, бицепса, развивает мышцы брюшного пресса</p>
                                    <a href="#inline1" class="more fancybox">Подробная информация</a>
                                </div>
                            </div>
                            
                            <div class="item">
                                <img src="images/tmp/r.png" alt="">
                                <div class="item-wrapper">
                                    <span class="title">Иванов эдуард эполлитович</span>
                                    <span class="stats">г. Москва, 12 недель тренировок</span>
                                    <p>Базовые упражнения на турнике формирует атлетическое телосложение, рост мышечной массы спины, бицепса, развивает мышцы брюшного пресса</p>
                                    <a href="#inline1" class="more fancybox">Подробная информация</a>
                                </div>
                            </div>
                            
                            <div class="item">
                                <img src="images/tmp/r.png" alt="">
                                <div class="item-wrapper">
                                    <span class="title">Иванов эдуард эполлитович</span>
                                    <span class="stats">г. Москва, 12 недель тренировок</span>
                                    <p>Базовые упражнения на турнике формирует атлетическое телосложение, рост мышечной массы спины, бицепса, развивает мышцы брюшного пресса</p>
                                    <a href="#inline1" class="more fancybox">Подробная информация</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- help -->
                <div class="help">
                    <span class="box-title"><span>Поможем достичь результата. Как?</span></span>

                    <div class="wrapper">
                        <h3>Мы хотим, чтобы Вы занимались спортом максимально эффективно. Станьте нашим<br /> клиентом прямо сейчас! И вы абсолютно бесплатно получите инструменты для<br /> достижения ваших результатов:</h3>

                        <div class="help-list">
                            <div class="item">
                                <div class="number">1</div>
                                <div class="description">
                                    Пошаговую инструкцию достижения спортивных целей, программу<br />«7-мь высокоэффективных комплексов упражнений»;
                                </div>
                            </div>

                            <div class="item">
                                <div class="number">2</div>
                                <div class="description">
                                    Консультацию персонального фитнес инструктора, который поможет вам достичь<br /> результатов;
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="number">3</div>
                                <div class="description">
                                    Возможность получить консультацию диетолога и пошаговую инструкцию по питанию «5-ть секретов здорового питания» с 50% скидкой;
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="number">4</div>
                                <div class="description">
                                    Спортивную рассылку с информацией о самых новейших методиках спортивных тренировок и здорового питания;  
                                </div>
                            </div>
                            
                            <div class="item">
                                <div class="number">5</div>
                                <div class="description">
                                    Вы можете обращаться к нашим фитнес специалистам по всем вопросам спортивного<br /> развития.
                                </div>
                            </div>
                        </div>

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm5" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(5)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>      
                    </div>
                </div>

                <!-- reasons -->
                <div class="reasons">
                    <span class="box-title"><span>5-ть причин, почему мы лучше</span></span>

                    <div class="wrapper">
                        <div class="col leftcol">
                            <h3>Как работают все:</h3>

                            <div class="item">
                                Продавцов не интересуют ваши желания. Следствие – вам просто пытаются впарить товар
                                <img src="images/i1.png" alt="" class="icon" />
                            </div>

                            <div class="item">
                                Не отвечают на ваши звонки и письма, продали товар и концы в воду. Следствие – никакого после продажного обслуживания.
                                <img src="images/i2.png" alt="" class="icon" />
                            </div>
                            
                            <div class="item">
                                Неудобный сайт. Следствие – невозможно найти интересующий товар.
                                <img src="images/i3.png" alt="" class="icon" />
                            </div>
                        </div>

                        <div class="col rightcol">
                            <h3>Как работаем мы:</h3>
                            
                            <div class="item">
                                Мы хотим, чтобы вы занимались спортом эффективно!<br />
                                Это наша основная задача. Нас интересует долгосрочное сотрудничество с Вами. Поэтому мы подготовили для Вас спортивную программу. Вам ничего не нужно придумывать – бери и делай!
                                <img src="images/i5.png" alt="" class="icon" />
                            </div>
                            
                            <div class="item">
                                У нас работают профессионалы<br />
                                Мы сами активные спортсмены и хотим передать накопленный опыт своим клиентам.
                                <img src="images/i6.png" alt="" class="icon" />
                            </div>
                            
                            <div class="item">
                                Мы всегда на связи<br />
                                Вы получите ответы на все вопросы, на все звонки, на все письма.
                                <img src="images/i7.png" alt="" class="icon" />
                            </div>
                            
                            <div class="item">
                                У нас лучший ассортимент<br />
                                Для вас мы собрали в 1-м месте самые эффективные тренажеры. Вам не нужно тратить время на поиск лучшего.
                                <img src="images/i8.png" alt="" class="icon" />
                            </div>
                            
                            <div class="item">
                                У нас качественный товар<br />
                                Мы продаем только сертифицированный товар.
                                <img src="images/i9.png" alt="" class="icon" />
                            </div>                            
                        </div>

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm6" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(6)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>      
                    </div>
                </div>

                <!-- schema -->
                <div class="schema">
                    <span class="box-title"><span>Схема работы с нами</span></span>

                    <div class="wrapper">
                        <div class="schema-image">
                            <img src="images/schema.png" alt="">
                            <span id="guarant" style="color: #fff">x</span>
                        </div>
                    </div>
                </div>

                <!-- guarantee -->
                <div class="guarantee">
                    <span class="box-title"><span>Наши гарантии</span></span>

                    <div class="wrapper">
                        <div class="guarantee-list">
                            <div class="item">
                                <img src="images/g1.png" alt="">
                                <p>Гарантия на турник 5 лет</p>
                            </div>

                            <div class="item">
                                <img src="images/g2.png" alt="">
                                <p>Вас подробно проконсультируют по вопросам установки и вышлют видео инструкцию</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/g3.png" alt="">
                                <p>При соблюдении нашей спортивной программы и рекомендациям инструктора вы 100% добьетесь результата</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/g4.png" alt="">
                                <p>Вы останетесь довольны качеством турника и уровнем обслуживания</p>
                            </div>
                            
                            <div class="item">
                                <img src="images/g5.png" alt="">
                                <p>Вас проконсультирует<br /> фитнес-инструктор</p>
                            </div>
                        </div>

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm7" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(7)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>      
                    </div>
                </div>

                <!-- team -->
                <div class="team">
                    <span class="box-title"><span>Наша команда</span></span>

                    <div class="wrapper">
                        <img src="images/tmp/t.jpg" alt="">

                        <p>Добро пожаловать НАКОВЕР.РУ - Интернет-магазин экипировки, инвентаря, одежды и спортивного питания для Борцов всех стилей!<br />
                        Лучший Борцовский инвентарь со всего света и самое качественное спортивное питание для профессионального роста и восстановления Борца - Самбо, Дзюдо, Вольная, Греко-римская Борьба, Джиу-джитсу, Грепплинг и, кончено, ММА! - наши партнеры находятся в России, Украине, Канаде, США, Бразилии, Франции, Англии, Германии, Швейцарии, Японии и Таиланде. Представленные в нашем магазине бренды Вы можете посмотреть тут.<br />
                        Занимаясь борьбой, мы сами прошли через бинты, футболки под курткой, которые рвутся после первой схватки, шерстяные носки, чтобы плотнее держать ногу и так далее.<br />
                        Мы открываем привычные вещи с другой стороны: влагоотводящие, анатомические, дышащие, компрессионные, прошитые антибактериальными нитями, адаптивные и настраиваемые - вот характеристики современной экипировки, доступные благодаря современным технологиям.</p>

                        <p>НАКОВЕР.РУ создан Борцами, поэтому мы учитываем все нюансы современного тренировочного и соревновательного процессов, как новичков, так и профессионалов, и тщательно выбираем поставщиков.</p>

                        <p>От всей души желаем Вам хорошей Борьбы!</p>
                    </div>
                </div>

                <!-- about -->
                <div class="about">
                    <span class="box-title"><span>Спорсмены о наших турниках</span></span>

                    <div class="wrapper">
                        <div class="about-list">
                            <div class="item">
                                <div class="view">
                                    <img src="images/tmp/a1.jpg" alt="">
                                </div>

                                <div class="description">
                                    <span class="title">Сергей "Хонда" Хандожко</span>

                                    <p><span class="highlight">Звание:</span> Мастер спорта по армейскому рукопашному бою, универсальному бою, ашихара карате; кандидат в мастера спорта по кикбоксингу.</p>

                                    <p><span class="highlight">Титулы:</span> Чемпион мира, Европы, России, Москвы по универсальному бою; чемпион России по ашихара карате; чемпион России по рукопашному бою. Профессиональный боец микс файт.<br />
                                    Все свое время я провожу на тренировках, сборах и соревнованиях. Естественно, такие нагрузки дают о себе знать. Поэтому для утренней разминки я приобрел у ребят турник, очень эффективный и простой в обращении. Благодаря занятиям на турнике, мои мышцы и связки всегда в тонусе и готовы к работе. Спасибо ребятам.<br />
                                    p.s. Занимайтесь спортом!</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="view">
                                    <img src="images/tmp/a2.jpg" alt="">
                                </div>

                                <div class="description">
                                    <span class="title">Маршалл Давыдов</span>

                                    <p><span class="highlight">Звание:</span> Мастер спорта по боевому самбо, кандидат в мастера спорта по греко-римской борьбе.</p>

                                    <p><span class="highlight">Титулы:</span> Победитель VII Олимпиады боевых искусств «Восток-Запад», обладатель Кубка Альянса по микс файт, вице-чемпион Москвы по боевому самбо, победитель Православного чемпионата России по боевому самбо, победитель и призёр всероссийских и международных турниров по боевому самбо. Чемпион Московской области по грэпплингу, победитель московских и областных турниров по греко-римской борьбе.<br />
                                    Откровенно говоря, во всем, что касается "подкачки мышц", я человек привередливый. Не люблю заниматься железом. От него тупеешь и мышцы становятся деревянными. Обычно, либо набарываюсь в зале, что помогает сохранять мышцы в форме, либо использую вес своего тела и упражнения на турнике. Это помогает выработать хватку и повысить свои силовые возможности. 
Во дворе у меня турника нет, да и тренироваться на виду у всех не всегда хочется, поэтому я обратился к ребятам и выбрал для себя подходящий турник, с удобными ручками и хорошим крепким каркасом. 
Привезенный мне турник установил достаточно быстро. Процесс оказался несложный. Опробовал и теперь с удовольствием пользуюсь! Делаю по две коротких тренировки в день. С утра - для бодрости духа, и вечером - чтобы лучше спать. Результатами ожидаемо очень доволен. Хватка стала еще крепче и бороться, соответственно, стало много проще! хорошие крепкие мышцы в нашей работе - большое дело! (улыбка).</p>
                                </div>
                            
                            <div class="item">
                                <div class="view">
                                    <img src="images/tmp/a3.jpg" alt="">
                                </div>

                                <div class="description">
                                    <span class="title">Сергей "Хонда" Хандожко</span>

                                    <p><span class="highlight">Звание:</span> Мастер спорта по художественной гимнастике</p>

                                    <p><span class="highlight">Титулы:</span> Призер чемпионата России, чемпионка Москвы, неоднократный победитель чемпионата Московской области, многократный победитель межрегиональных турниров.<br />
                                    Доброго времени суток, я Ирина Олифиренко. Мне, как профессиональному спортсмену, необходимо поддерживать физическую форму ежедневно. Строгое питание, режим и изнурительные тренировки. При выполнении упражнений колоссальная нагрузка идет на мой позвоночник и мне жизненно необходимо его разминать. Оптимальное упражнение - висеть на турниках по утрам и вечерам, такой совет мне дала мой тренер по физической подготовке. Действительно помогает, перед сном чувствую себя куда более расслаблено, всем спортсменам советую повесить дома турник для этой цели.</p>
                                </div>
                            </div>
                        </div>

                        <!-- -->
                        <div class="order-now">
                            <div class="order">
                                <form action="./send.php" id="orderForm8" method="post">
                                    <h2>Закажите турник прямо сейчас</h2>
                                    <p>+ в подарок программа “5 высокоэффективных<br /> комплексов упражнений”</p>

                                    <input type="text" id="" value="" class="textbox" name="name" placeholder="Введите Ваше имя..." /><br />
                                    <input type="text" id="" value="" class="textbox" name="phone" placeholder="Введите телефон..." /><br />
                                    <input id="assort" type="button"  onclick="formSend6(8)" id="" value="Оформите заказ" class="submit button" /><br />
                                     <input type="hidden" name="type" value="6">
                                </form>
                            </div>
                        </div>      
                    </div>                    
                </div>
            </div>            

            <!-- footer -->
            <footer>
                <div class="wrapper">
                    <div class="footer-contacts">
                        <h6>Наши контакты:</h6>

                        <div class="shadow"></div>

                        <div class="footer-phone">
                            8 (499) 653-71-77<br />
                            8 (926) 190-02-49
                        </div>

                        <div class="footer-email"><a href="mailto:sale@turnik-store.ru">sale@turnik-store.ru</a></div>

                        <div class="shadow"></div>

                        <div class="footer-address">
                            г. Москва, ул. Энергетическая 18. / Адрес пункта самовывоза: ул. Складочная 1, корп. 1.
                        </div>
                    </div>

                    <!-- -->
                    <div class="footer-recomended">
                        <div class="social">
                            <img src="images/tmp/bs1.jpg" alt="">
                        </div>

                        <div class="description">
                            <h6>Нас рекомендует<br/ >группа</h6>

                            <p>2011-2013 Интернет-магазин «turnik-store.ru».<br />
                            Все цены указаны в рублях.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        <!-- popup -->
        <div class="popup" id="inline1">
            <div class="popup-wrapper">
                <h5>Иванов эдуард эполлитович</h5>

                <p><strong>г. Москва, 12 недель тренировок</strong></p>

                <p><strong>Прибыль</strong> - 120 000 руб./мес.<br />
                <strong>Срок бизнеса</strong> - 1,5 года</p>

                <table>
                    <tr>
                        <td><img src="images/tmp/p1.jpg" alt=""></td>
                        <td><img src="images/tmp/p2.jpg" alt=""></td>
                    </tr>
                </table>
                
                <p>Я начала где-то с ноября, на тот момент было 5 поставщиков мной выбранно. Сегодня я сотрудничаю только с Вами и другой компанией по стальным украшениям. Хочу добавить изделия из муранского стекла. Вот Вам и результат, т.е. Ваши украшения лучшие, и поверьте-мне очень сложно угодить))))Ассортимент на 80% Ваш (и в интернет магазине кстати тоже). После работы с вами стало увеличение в 2-3 раза. Но мне еще сложно отследить динамику, так как работаю первый год. И, конечно, май с декабрем никак не сравнить)</p>
            </div>
        </div>
        <div class="hide">
          <div id="orders">
          

           <form id="ordersForm" action="./send.php" method="post">
            <label for="name">Ваше имя</label>
            <input type="text" name="name" class="txt name">
            <br>
            <label for="phone">Ваш номер</label>
            <input type="text" name="phone" class="txt phone">
            <input type="hidden" name="type" value="8">
            <input type="hidden" id="ordername" name="ordername" value="">
            <button type="button" class="btn btn-danger cent" onclick="ordersSend()">Отправить</button>
          </form>
          <br>

          <p class="formfree"></p>
        </div>
        </div>


<!-- more1 --><!-- more1 --><!-- more1 --><!-- more1 --><!-- more1 --><!-- more1 --><!-- more1 -->
<div id="more1" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t1-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t1-1.jpg" alt="">
      <img src="./images/t1/3.jpg" alt="">
      <img src="./images/t1/36415_5.1340623395.jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Турник 3 хвата: широкий + узкий + средний</h2>
    <p class="price">Цена: 2 250 руб.</p>
    <form id="orderModal-1" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Турник 3 хвата: широкий + узкий + средний">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(1)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
      <h3>Описание</h3>
      <p>
        Ширина - 115 см<br />
        Вылет от стены - 40 см<br />
        Высота - 32 см<br />
        Вес - 5 кг
      </p>
    </div>
    <div class="clear"></div>
    <div class="params">
      <!-- <h3>Комплектация</h3> -->
    </div>
  </div>
</div>


<!-- more2 --><!-- more2 --><!-- more2 --><!-- more2 --><!-- more2 --><!-- more2 -->
<div id="more2" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t2-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t2-1.jpg" alt="">
      <img src="./images/t2/turnik-nastennyy-s-parallelnym-hvatom-vnutrenn-f3191221.jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Турник 2 хвата: широкий + узкий</h2>
    <p class="price">Цена: 1 950 руб.</p>
    <form id="orderModal-2" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Турник 2 хвата: широкий + узкий">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(2)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
        <h3>Описание</h3>
        <p> Длина перекладины - 110см<br />
 Вынос от стенки перекладины - 52см<br />
 Места хвата - неопреновые ручки<br />
 Металл - сталь<br />
 Вес конструкции - 5,5кг<br />
 Допустимая нагрузка - 250кг</p>
      </div>
      <div class="params">
          <!-- <h3>Комплектация</h3> -->
          
      </div>
  </div>
</div>




<!-- more3 --><!-- more3 --><!-- more3 --><!-- more3 --><!-- more3 --><!-- more3 -->
<div id="more3" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t3-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t3-1.jpg" alt="">
      <img src="./images/t3/00952c31055cb80f0202296882141947cde867ba.jpg" alt="">
      <img src="./images/t3/8.jpg" alt="">
      <img src="./images/t3/9.jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Тренажер 2 в 1: турник + брусья</h2>
    <p class="price">Цена: 2 950 руб.</p>
    <form id="orderModal-3" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Тренажер 2 в 1: турник + брусья">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(3)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
        <h3>Описание</h3>
        <p> Длина перекладины - 110см<br />
Вынос от стенки перекладины - 52см <br />
Расстояние между брусьями - 52см<br />
Вынос от стенки брусьев - 52см<br />
Места хвата - неопреновые ручки<br />
Металл - сталь<br />
Вес конструкции - 11кг<br />
Допустимая нагрузка - 250кг</p>
      </div>
      <div class="params">
          <!-- <h3>Комплектация</h3> -->
          
      </div>
    </div>  
  </div>




<!-- more4 --><!-- more4 --><!-- more4 --><!-- more4 --><!-- more4 --><!-- more4 -->
<div id="more4" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t4-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t4-1.jpg" alt="">
      <img src="./images/t4/6_1.jpg" alt="">
      <img src="./images/t4/6_2.jpg" alt="">
      <img src="./images/t4/741_x_59a3ef24.jpg" alt="">
      <img src="./images/t4/00952c2301a95b8be18e39e4bc4bf1944237d3cb.jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Тренажер: турник + брусья + узкий хват</h2>
    <p class="price">Цена: 3 190 руб.</p>
    <form id="orderModal-4" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Тренажер: турник + брусья + узкий хват">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(4)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
        <h3>Описание</h3>
        <p> Длина перекладины - 110см<br />
Вынос от стенки перекладины - 52см<br />
Расстояние между брусьями - 52см<br />
Вынос от стенки брусьев - 52см<br />
Места хвата - неопреновые ручки<br />
Металл - сталь<br />
Вес конструкции - 11кг<br />
Допустимая нагрузка - 250кг</p>
      </div>
       <div class="params">
          <!-- <h3>Комплектация</h3> -->
          
      </div>
  </div>
  
</div>



<!-- more5 --><!-- more5 --><!-- more5 --><!-- more5 --><!-- more5 --><!-- more5 -->
<div id="more5" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t5-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t5-1.jpg" alt="">
      <img src="./images/t5/4_1.jpg" alt="">
      <img src="./images/t5/360414888.jpg" alt="">
      <img src="./images/t5/meKAugQyHJI.jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Тренажер 4 в 1: турник + брусья + пресс + узкий хват</h2>
    <p class="price">Цена: 3 950 руб.</p>
    <form id="orderModal-5" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Тренажер 4 в 1: турник + брусья + пресс + узкий хват">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(5)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
        <h3>Описание</h3>
        <p> Длина перекладины - 110см<br />
Вынос от стенки перекладины - 55см<br />
Расстояние между брусьями - 59см<br />
Вынос от стенки брусьев - 80см<br />
Места хвата - неопреновые ручки<br />
Металл - сталь<br />
Вес конструкции - 15кг<br />
Допустимая нагрузка - 300кг</p>
      </div>
      <div class="params">
          <!-- <h3>Комплектация</h3> -->
          
      </div>
  </div>
</div>




<!-- more6 --><!-- more6 --><!-- more6 --><!-- more6 --><!-- more6 --><!-- more6 -->
<div id="more6" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t6-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t6-1.jpg" alt="">
      <img src="./images/t6/26.jpg" alt="">
      <img src="./images/t6/26_8.jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Тренажер 4 в 1 (разборный): турник + брусья + пресс + узкий хват</h2>
    <p class="price">Цена: 3 950 руб.</p>
    <form id="orderModal-6" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Тренажер 4 в 1 (разборный): турник + брусья + пресс + узкий хват">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(6)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
        <h3>Описание</h3>
        <p> Длина перекладины - 110см<br />
Вынос от стенки перекладины - 55см<br />
Расстояние между брусьями - 59см<br />
Вынос от стенки брусьев - 80см<br />
Места хвата - неопреновые ручки<br />
Металл - сталь<br />
Вес конструкции - 15кг<br />
Допустимая нагрузка - 300кг</p>
      </div>
      <div class="params">
          <!-- <h3>Комплектация</h3> -->
          
      </div>
  </div>

</div>




<!-- more7 --><!-- more7 --><!-- more7 --><!-- more7 --><!-- more7 --><!-- more7 -->
<div id="more7" class="moreModal">
  <div class="left">
    <div class="imgWrap">
      <img src="./images/mains/t7-1.jpg" class="mainImg" alt="">
    </div>
    <div class="gallery">
      <img src="./images/mains/t7-1.jpg" alt="">
      <img src="./images/t7/turnik-brusya-s-uzkim-hvatom-usilennyy (1).jpg" alt="">
    </div>
  </div>

  <div class="right">
    <h2>Тренажер 4 в 1: широкий хват + узкий хват + средний хват + брусья</h2>
    <p class="price">Цена: 3 350 руб.</p>
    <form id="orderModal-7" action="./send.php" method="post">
      <label for="name">Ваше имя</label>
      <input type="text" name="name" class="txt name">
      <br>
      <label for="phone">Ваш номер</label>
      <input type="text" name="phone" class="txt phone">
      <input type="hidden" name="tname" value="Тренажер 4 в 1: широкий хват + узкий хват + средний хват + брусья">
      <input type="hidden" name="type" value="7">
      <button type="button" class="btn btn-danger cent" onclick="orderModalSend(7)">Заказать</button>
    </form>
    <div class="clear"></div>
    <div class="descr">
        <h3>Описание</h3>
        <p> Ширина перекладины турника - 115 см<br />
Диаметр перекладины турника - 27 мм<br />
Вылет от стены турника - 64 см<br />
Длина брусьев - 70 см<br />
Ширина брусьев - 55 см<br />
Диаметр трубы брусьев - 34 мм.<br />
Вес – 11 кг</p>
      </div>
      <div class="params">
          <!-- <h3>Комплектация</h3> -->
          
      </div>
  </div>
  
</div>

<div id="inline">

  <form id="callForm" action="./send.php" method="post">

    <label for="name">Ваше имя</label>
    <input type="text" name="name" class="txt name">
    <br>
    <label for="phone">Ваш номер</label>
    <input type="text" name="phone" class="txt phone">
    <input type="hidden" name="type" value="1">
    <button type="button" class="btn btn-danger cent" onclick="formSend1()">Отправить</button>
  </form>

</div>


<div id="inline1">
  

  <form id="shipForm" action="./send.php" method="post">
<h3>Узнать о бесплатной доставке</h3>
    <label for="name">Ваше имя</label>
    <input type="text" name="name" class="txt name">
    <br>
    <label for="phone">Ваш номер</label>
    <input type="text" name="phone" class="txt phone">
    <input type="hidden" name="type" value="2">
    <button type="button" class="btn btn-danger cent" onclick="formSend2()">Отправить</button>
  </form>
  <br>

  <p class="formfree"></p>
</div>


<div id="inline2">
  

   <form id="programmForm" action="./send.php" method="post">
<h3>Узнать о индивидуальной спортивной программе</h3>
    <label for="name">Ваше имя</label>
    <input type="text" name="name" class="txt name">
    <br>
    <label for="phone">Ваш номер</label>
    <input type="text" name="phone" class="txt phone">
    <input type="hidden" name="type" value="3">
    <button type="button" class="btn btn-danger cent" onclick="formSend3()">Отправить</button>
  </form>
  <br>

  <p class="formfree"></p>
</div>


<div id="inline3">
  

  <form id="installForm" action="./send.php" method="post">
<h3>Узнать о профессиональной установки турника</h3>
    <label for="name">Ваше имя</label>
    <input type="text" name="name" class="txt name">
    <br>
    <label for="phone">Ваш номер</label>
    <input type="text" name="phone" class="txt phone">
    <input type="hidden" name="type" value="4">
    <button type="button" class="btn btn-danger cent" onclick="formSend4()">Отправить</button>
  </form>
  <br>

  <p class="formfree"></p>
</div>


<div id="inline4">
    <form id="consultForm" action="./send.php" method="post">

    <label for="name">Ваше имя</label>
    <input type="text" name="name" class="txt name">
    <br>
    <label for="phone">Ваш номер</label>
    <input type="text" name="phone" class="txt phone">
    <input type="hidden" name="type" value="5">
    <button type="button" class="btn btn-danger cent" onclick="formSend5()">Отправить</button>
  </form>
  <br>

  <p class="formfree"></p>
</div>
<div id="output"></div>
        <script src="js/call.js"></script>
    </body>
</html>
