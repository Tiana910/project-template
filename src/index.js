"use strict";
exports.__esModule = true;
var search_form_js_1 = require("./search-form.js");
var search_results_js_1 = require("./search-results.js");
var user_js_1 = require("./user.js");
var lib_js_1 = require("./lib.js");
var localStorage_1 = require("./localStorage");
window.addEventListener('DOMContentLoaded', function () {
    localStorage.user = JSON.stringify({ "nameUser": 'Wade Warren', "avatarLink": '/img/avatar.png' });
    localStorage.favoriteItemsAmount = 5;
    var user = (0, localStorage_1.getUserData)("user");
    var nameUser = user.nameUser;
    var avatarLink = user.avatarLink;
    var favoriteItemsAmount = (0, localStorage_1.getFavoritesAmount)('user.favoriteItemsAmount');
    (0, user_js_1.renderUserBlock)("nameUser", "avatarLink", 0);
    (0, search_form_js_1.renderSearchFormBlock)();
    (0, search_results_js_1.renderSearchStubBlock)();
    (0, lib_js_1.renderToast)({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: function () { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE2RTtBQUM3RSx5REFBMkQ7QUFDM0QscUNBQWlEO0FBQ2pELG1DQUFzQztBQUN0QywrQ0FBZ0U7QUFFaEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBRTFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNuRyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBRXJDLElBQU0sSUFBSSxHQUFHLElBQUEsMEJBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9CLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDbkMsSUFBTSxtQkFBbUIsR0FBRyxJQUFBLGlDQUFrQixFQUFDLDBCQUEwQixDQUFDLENBQUM7SUFFM0UsSUFBQSx5QkFBZSxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDNUMsSUFBQSxzQ0FBcUIsR0FBRSxDQUFBO0lBQ3ZCLElBQUEseUNBQXFCLEdBQUUsQ0FBQTtJQUN2QixJQUFBLG9CQUFXLEVBQ1QsRUFBRSxJQUFJLEVBQUUsMkRBQTJELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUN0RixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQ3pFLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclNlYXJjaEZvcm1CbG9jaywgZm9ybWhhbmRsZXIsIHNlYXJjaCB9IGZyb20gJy4vc2VhcmNoLWZvcm0uanMnXG5pbXBvcnQgeyByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVXNlckJsb2NrLCBVc2VyIH0gZnJvbSAnLi91c2VyLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGdldFVzZXJEYXRhLCBnZXRGYXZvcml0ZXNBbW91bnQgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSdcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgbG9jYWxTdG9yYWdlLnVzZXIgPSBKU09OLnN0cmluZ2lmeSh7IFwibmFtZVVzZXJcIjogJ1dhZGUgV2FycmVuJywgXCJhdmF0YXJMaW5rXCI6ICcvaW1nL2F2YXRhci5wbmcnIH0pO1xuICBsb2NhbFN0b3JhZ2UuZmF2b3JpdGVJdGVtc0Ftb3VudCA9IDU7XG5cbiAgY29uc3QgdXNlciA9IGdldFVzZXJEYXRhKFwidXNlclwiKTtcbiAgY29uc3QgbmFtZVVzZXIgPSB1c2VyLm5hbWVVc2VyO1xuICBjb25zdCBhdmF0YXJMaW5rID0gdXNlci5hdmF0YXJMaW5rO1xuICBjb25zdCBmYXZvcml0ZUl0ZW1zQW1vdW50ID0gZ2V0RmF2b3JpdGVzQW1vdW50KCd1c2VyLmZhdm9yaXRlSXRlbXNBbW91bnQnKTtcblxuICByZW5kZXJVc2VyQmxvY2soXCJuYW1lVXNlclwiLCBcImF2YXRhckxpbmtcIiwgMClcbiAgcmVuZGVyU2VhcmNoRm9ybUJsb2NrKClcbiAgcmVuZGVyU2VhcmNoU3R1YkJsb2NrKClcbiAgcmVuZGVyVG9hc3QoXG4gICAgeyB0ZXh0OiAn0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LgnLCB0eXBlOiAnc3VjY2VzcycgfSxcbiAgICB7IG5hbWU6ICfQn9C+0L3Rj9C7JywgaGFuZGxlcjogKCkgPT4geyBjb25zb2xlLmxvZygn0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpIH0gfVxuICApXG59KVxuIl19