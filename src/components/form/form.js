$(".form-item--js").on("blur focus", function (e) {
  var $this = $(this);
  var $parent = $this.parent();
  var $label = $this.parent().find("label");

  if (e.type == "focus") {
    if ($this.val() !== "") {
      $parent.addClass("form-item--active");
      $label.addClass("label--active");
    } else {
      $parent.toggleClass("form-item--active");
      $label.toggleClass("label--active");
    }
  } else if (e.type == "blur") {
    if ($this.val() == "") {
      $parent.removeClass("form-item--active");
      $label.removeClass("label--active");
    } else {
      $parent.addClass("form-item--active");
      $label.addClass("label--active");
    }
  }
});