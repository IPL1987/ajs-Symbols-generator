# Symbols & Generator

_Легенда_

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

Описание

Используйте следующую заготовку для организации перебора класса Team:
```javascript
class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }
}
```

[![Build status](https://ci.appveyor.com/api/projects/status/u9tn6civnaaqquin/branch/main?svg=true)](https://ci.appveyor.com/project/IPL1987/ajs-symbols-generator/branch/main)
