export function date(str) {
  let pattern = /%date.?(.*)/;

  return pattern.exec(str)[1];
}

export function slug(str) {
  let pattern = /%slug.?(.*)/;

  return pattern.exec(str)[1];
}

export function cover(str) {
  let pattern = /%cover.?(.*)/;

  return pattern.exec(str)[1];
}

export function title(str) {
  let pattern = /%title.?(.*)/;

  return pattern.exec(str)[1];
}

export function description(str) {
  let pattern = /%description.?(.*)/;

  return pattern.exec(str)[1];
}
