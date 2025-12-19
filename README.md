# 🐍 Snake Game en React

Un mini‑juego de Snake hecho con React y Vite, perfecto para tenerlo embebido en tu sitio o como playground personal.

## ¿Qué es este proyecto?

Es una implementación del clásico juego de la serpiente, construida con:

- React + React Router
- Vite como bundler
- CSS puro para todo el styling

La serpiente se dibuja en un tablero de 20×20, se mueve en tiempo real y va creciendo cada vez que come. El puntaje es simplemente el largo actual de la serpiente.

## Cómo se juega

- **Moverte**: usa las teclas `W`, `A`, `S`, `D`
	- `W` → arriba
	- `S` → abajo
	- `A` → izquierda
	- `D` → derecha
- **Objetivo**: come la comida que aparece en el tablero para crecer.
- **Pierdes si**:
	- Te sales del tablero.
	- Chocas contra tu propio cuerpo.

Al empezar/ver la pantalla de inicio puedes darle a **¡Jugar!** para arrancar la partida. Cuando pierdes, se muestra tu **puntaje final** y puedes darle a **Intentar de nuevo** para resetear el juego.

La app principal vive en:

- snakeGame/src/App.jsx
- snakeGame/src/pages/Index.jsx
- snakeGame/src/pages/Snake.jsx

## Cómo correrlo en local

1. Clona el repo y entra a la carpeta del proyecto:

	 ```bash
	 cd snake/snakeGame
	 ```

2. Instala dependencias:

	 ```bash
	 npm install
	 ```

3. Levanta el entorno de desarrollo:

	 ```bash
	 npm run dev
	 ```

4. Abre en tu navegador la URL que te muestre Vite (normalmente `http://localhost:5173`).

## Estructura rápida

```txt
snake/
	README.md
	snakeGame/
		index.html
		package.json
		vite.config.js
		src/
			main.jsx
			App.jsx
			pages/
				Index.jsx
				Snake.jsx
			main.css
```

## Ideas para mejorar

- Agregar dificultad progresiva (velocidad más rápida con el tiempo).
- Soportar flechas del teclado además de WASD.
- Añadir efectos de sonido al comer y al perder.

## Licencia

Proyecto creado para experimentar y aprender. Úsalo, modifícalo y juégalo a gusto.
