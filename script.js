# Script
# qq_390722

hostname = api.gkaorlz.com,ctrl.playcvn.com,p.doras.api.vcinema.cn,mage.if.qidian.com,i.weread.qq.com,api-163.biliapi.net


# 西瓜视频 （作者：Meeta）
^https?:\/\/api\.gkaorlz\.com\/api\/user\/get url script-response-body https://meetagit.github.io/MeetaRules/Surge/Scripting/watermelonvideo.js
^https?:\/\/api2\.gkaorlz\.com\:8080\/api\/user\/ url script-response-body https://meetagit.github.io/MeetaRules/Surge/Scripting/watermelonvideo.js


# 人人影视字幕组 （作者：Kaya）
^http:\/\/ctrl\.playcvn\.com\/app\/(init|ads) url script-response-body https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/YYeTs.js


# 南瓜电影 （作者：Meeta）
^https?:\/\/p\.doras\.api\.vcinema\.cn\/v5.0\/user/ url script-response-body https://meetagit.github.io/MeetaRules/Surge/Scripting/cushawmovie.js


# 起点APP去启动广告 （作者：LarkinZero）
^https:\/\/mage\.if\.qidian\.com\/argus\/api\/v3\/client\/getsplashscreen\?localLabels=100 url script-response-body https://raw.githubusercontent.com/LarkinZero/Surge/master/qidian_anti_ad.js


# 微信读书 （作者：yxiaocai）
^https?:\/\/i\.weread\.qq\.com\/pay url script-response-body https://raw.githubusercontent.com/yxiaocai/quanx/master/js/iweread.js


# 网易漫画VIP 解锁VIP漫画 以及付费漫画 （作者：野比）
^https?:\/\/api-163\.biliapi\.net\/(getUserProfile|source\/detail) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wymh163.js
