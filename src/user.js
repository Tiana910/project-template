"use strict";
exports.__esModule = true;
exports.renderUserBlock = exports.User = void 0;
var lib_js_1 = require("./lib.js");
var User = /** @class */ (function () {
    function User(nameUser, avatarLink, favoriteItemsAmount) {
        this.nameUser = nameUser;
        this.avatarLink = avatarLink;
        this.favoriteItemsAmount = favoriteItemsAmount;
    }
    return User;
}());
exports.User = User;
function renderUserBlock(nameUser, avatarLink, favoriteItemsAmount) {
    var favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount;
    var hasFavoriteItems = favoriteItemsAmount < 1 ? false : true;
    (0, lib_js_1.renderBlock)('user-block', "\n    <div class=\"header-container\">\n      <img class=\"avatar\" src=\"".concat(avatarLink, "\" alt=\"").concat(nameUser, "\" />\n      <div class=\"info\">\n          <p class=\"name\">").concat(nameUser, "</p>\n          <p class=\"fav\">\n            <i class=\"heart-icon ").concat(hasFavoriteItems ? ' active' : '', "\"></i>\n            ").concat(favoritesCaption, "\n          </p>\n      </div>\n    </div>\n    "));
}
exports.renderUserBlock = renderUserBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBRXRDO0lBSUUsY0FBYSxRQUFnQixFQUFFLFVBQWtCLEVBQUUsbUJBQTRCO1FBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQTtJQUNoRCxDQUFDO0lBQ0QsV0FBQztBQUFELENBQUMsQUFUSCxJQVNHO0FBVFUsb0JBQUk7QUFXakIsU0FBZ0IsZUFBZSxDQUFFLFFBQWUsRUFBRSxVQUFpQixFQUFFLG1CQUEyQjtJQUU5RixJQUFNLGdCQUFnQixHQUFHLG1CQUFtQixHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQTtJQUNwRixJQUFNLGdCQUFnQixHQUFHLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUE7SUFFNUQsSUFBQSxvQkFBVyxFQUNULFlBQVksRUFDWixvRkFFNkIsVUFBVSxzQkFBVSxRQUFRLDRFQUVqQyxRQUFRLGtGQUVELGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0NBQ3RELGdCQUFnQixxREFJekIsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQXBCRCwwQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIG5hbWVVc2VyOiBzdHJpbmdcbiAgYXZhdGFyTGluazogc3RyaW5nXG4gIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlclxuICBjb25zdHJ1Y3RvciAobmFtZVVzZXI6IHN0cmluZywgYXZhdGFyTGluazogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50PzogbnVtYmVyKSB7XG4gICAgdGhpcy5uYW1lVXNlciA9IG5hbWVVc2VyXG4gICAgdGhpcy5hdmF0YXJMaW5rID0gYXZhdGFyTGlua1xuICAgIHRoaXMuZmF2b3JpdGVJdGVtc0Ftb3VudCA9IGZhdm9yaXRlSXRlbXNBbW91bnRcbiAgfVxuICB9XG4gIFxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayAobmFtZVVzZXI6c3RyaW5nLCBhdmF0YXJMaW5rOnN0cmluZywgZmF2b3JpdGVJdGVtc0Ftb3VudD86bnVtYmVyKSB7XG5cbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPDEgPyAn0L3QuNGH0LXQs9C+INC90LXRgicgOiBmYXZvcml0ZUl0ZW1zQW1vdW50ICBcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQ8MSA/IGZhbHNlIDp0cnVlIFxuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2F2YXRhckxpbmt9XCIgYWx0PVwiJHtuYW1lVXNlcn1cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke25hbWVVc2VyfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uICR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT5cbiAgICAgICAgICAgICR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cbiJdfQ==