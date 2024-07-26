# image-360-sprites⭐⭐⭐⭐☆

![Banner](image/cap/cap-image.PNG)
<p align="center" style="color: white;">
    <img src="https://profile-counter.glitch.me/Juanes200122/count.svg" />
</p>


<p>
    <a href="https://www.linkedin.com/in/juan-estaban-ar%C3%A9valo-056bab240/" target="_blank" rel="Linkedin">
      <img src="https://img.shields.io/badge/-@JuanEsteban-0077B5?style=flat-square&amp;labelColor=0077B5&amp;logo=LinkedIn&amp;link=https://www.linkedin.com/in/juan-estaban-ar%C3%A9valo-056bab240/" alt="LinkedIn Badge">
    </a> 
    <a href="https://www.instagram.com/jeacsi.official_022?igsh=MWJ6MHRwcnhoZXVxbQ==" target="_blank" rel="Instagram">
      <img src="https://img.shields.io/badge/-@jeacsi.official_022-purple?style=flat&logo=instagram&logoColor=white&link=https://www.instagram.com/jeacsi.official_022?igsh=MWJ6MHRwcnhoZXVxbQ==" alt="Instagram Badge">
    </a>
</p>
<p>Este proyecto implementa un carrusel 360º interactivo similar al de Amazon. El carrusel permite a los usuarios visualizar productos desde múltiples ángulos, proporcionando una experiencia más inmersiva y detallada.</p>

## Características

- **Visualización 360º**: Permite a los usuarios rotar el producto en cualquier dirección para verlo desde diferentes ángulos.
- **Interfaz Intuitiva**: Controles simples y accesibles para una navegación fácil.
- **Alta Compatibilidad**: Funciona en todos los navegadores modernos y dispositivos móviles.

```bash
    git clone https://github.com/Juanes200122/image-360-sprites.git
    cd image-360-sprites
```
<div align="right">
    
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white)
![CodePen](https://img.shields.io/badge/-CodePen-000000?style=flat&logo=codepen)

</div>

## <b> Funcionalidad</b>
<img align="right" src="image/cap/hero-360-image.gif" width="400"/>

```JS
   const offsets = {
        1: { offset_left: '0', offset: 0 },
        2: { offset_left: '0', offset: -2346 },
        3: { offset_left: '0', offset: -1173 },
        4: { offset_left: '0', offset: -3519 },
        5: { offset_left: '0', offset: -391 },
        6: { offset_left: '0', offset: -2737 }
      // Añadir más valores según sea necesario
  }
```
</br>


## JavaScript del Carrusel 360º

El siguiente código JavaScript implementa la funcionalidad de arrastre para el carrusel 360º, permitiendo a los usuarios rotar el producto a través del arrastre con el ratón o el toque en dispositivos móviles.

### Selección de Elementos

Primero, seleccionamos los elementos del DOM que estarán involucrados en la interacción:

```javascript
const moveElements = document.querySelectorAll('#move-image-360');
const valorDisplays = document.querySelectorAll('#value');

```

###  Variables y Funciones de Estado
```javascript
  let isDragging = false;
  let startX;
  let lastValue = 1;
  const minValue = 1;
  const maxValue = 71;
```


</br>

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width ="25"><b> Skills</b>
  - 💻 &nbsp;
    ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
  - 🌐 &nbsp;
    ![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)
    ![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)

