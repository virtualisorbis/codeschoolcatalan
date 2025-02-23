const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const outputFrame = document.getElementById('output');
const checkCodeButton = document.getElementById('checkCodeButton');
const lessonNumber = document.getElementById('lesson-number');
const lessonTitle = document.getElementById('lesson-title');
const lessonInstruction = document.getElementById('lesson-instruction');
const lessonExplanation = document.getElementById('lesson-explanation');
const lessonExample = document.getElementById('lesson-example');

const lessons = [





  {
    title: "Escriu un Encapçalament",
    explanation: `
        <p>L'HTML s'utilitza per estructurar el contingut web. Els encapçalaments ajuden a organitzar el contingut, i <code>&lt;h1&gt;</code> és l'etiqueta d'encapçalament més gran.</p>
        <p>Exemple:</p>
        <pre>&lt;h1&gt;Això és un Encapçalament d'Exemple&lt;/h1&gt;</pre>
        <p>Això crea un gran encapçalament a la pàgina.</p>
      `,
    example: "&lt;h1&gt;Això és un Encapçalament d'Exemple&lt;/h1&gt;",
    instruction: "Escriu un element <code>&lt;h1&gt;</code> amb el text \"Hola, Món!\".",
    check: () => /<h1>\s*Hola, Món!\s*<\/h1>/i.test(htmlCode.value)
  },
  
  {
    title: "Afegeix un Paràgraf",
    explanation: `
        <p>L'etiqueta <code>&lt;p&gt;</code> defineix un paràgraf de text.</p>
        <p>Exemple:</p>
        <pre>&lt;p&gt;Això és un paràgraf.&lt;/p&gt;</pre>
        <p>Els paràgrafs s'utilitzen per blocs de text sota els encapçalaments.</p>
      `,
    example: "&lt;p&gt;Això és un paràgraf.&lt;/p&gt;",
    instruction: "Afegeix un element <code>&lt;p&gt;</code> amb el text \"Aquest és el meu primer paràgraf.\" sota l'encapçalament.",
    check: () => /<p>\s*Aquest és el meu primer paràgraf.\s*<\/p>/i.test(htmlCode.value)
  },
  
  {
    title: "Estilitza l'Encapçalament",
    explanation: `
        <p>El CSS estilitza els elements HTML. Per canviar el color del text, utilitza la propietat <code>color</code> dins d'una regla CSS.</p>
        <p>Exemple:</p>
        <pre>
  h1 {
    color: green;
  }
        </pre>
        <p>Això fa que tots els elements <code>&lt;h1&gt;</code> siguin verds.</p>
      `,
    example: "h1 {\n  color: green;\n}",
    instruction: "Fes que el text del teu <code>&lt;h1&gt;</code> sigui de color vermell utilitzant CSS.",
    check: () => /h1\s*{[^}]*color\s*:\s*red;?[^}]*}/i.test(cssCode.value)
  },
  
  {
    title: "Centra el Paràgraf",
    explanation: `
        <p>Pots centrar el text utilitzant la propietat <code>text-align</code>.</p>
        <p>Exemple:</p>
        <pre>
  p {
    text-align: center;
  }
        </pre>
        <p>Això centra tot el text dins dels paràgrafs.</p>
      `,
    example: "p {\n  text-align: center;\n}",
    instruction: "Centra el text del teu <code>&lt;p&gt;</code> utilitzant CSS.",
    check: () => /p\s*{[^}]*text-align\s*:\s*center;?[^}]*}/i.test(cssCode.value)
  },
  
  {
    title: "Afegeix Interacció amb JavaScript",
    explanation: `
        <p>El JavaScript afegeix interactivitat. Pots detectar clics amb <code>addEventListener</code> i mostrar missatges utilitzant <code>alert</code>.</p>
        <pre>
  document.querySelector('h1')
    .addEventListener('click', function() {
      alert('Encapçalament clicat!');
    });
        </pre>
        <h4>🔍 Explicació del Codi:</h4>
        <ul>
          <li><span class="keyword">document</span>: Accedeix a la pàgina web.</li>
          <li><span class="method">querySelector</span>: Troba l'element <code>&lt;h1&gt;</code>.</li>
          <li><span class="method">addEventListener</span>: Escolta l'esdeveniment <span class="string">'click'</span>.</li>
          <li><span class="method">alert</span>: Mostra un missatge emergent.</li>
        </ul>
      `,
    example: `
  document.querySelector('h1').addEventListener('click', function() {
    alert('Encapçalament clicat!');
  });
    `,
    instruction: "Escriu JavaScript per mostrar una alerta amb el missatge <code>'Hola des de JavaScript!'</code> quan es faci clic a l'<code>&lt;h1&gt;</code>.",
    check: () => /(document\.querySelector\(['"]h1['"]\)\.addEventListener\(['"]click['"]\s*,\s*function\s*\(\)\s*{\s*alert\(['"]Hola des de JavaScript!['"]\);?\s*}\s*\))/i.test(jsCode.value)
  },
  
  {
    title: "Canvia el Text amb JavaScript",
    explanation: `
        <p>Pots canviar el text utilitzant JavaScript modificant la propietat <code>textContent</code>.</p>
        <pre>
  document.querySelector('p').textContent = 'Nou text!';
        </pre>
        <p>Això canvia el text del paràgraf a "Nou text!".</p>
      `,
    example: "document.querySelector('p').textContent = 'Nou text!';",
    instruction: "Canvia el text del teu paràgraf a <code>'El JavaScript ha canviat aquest text!'</code> utilitzant JavaScript.",
    check: () => /document\.querySelector\(['"]p['"]\)\.textContent\s*=\s*['"]El JavaScript ha canviat aquest text!['"];/i.test(jsCode.value)
  },  








  {
    title: "Crea un Botó i Gestiona els Clics",
    explanation: `
        <p>Afegim un botó i fem que faci alguna cosa quan es faci clic!</p>
        <pre>
  &lt;button&gt;Fes clic&lt;/button&gt;
  
  document.querySelector('button').addEventListener('click', function() {
    alert('Botó clicat!');
  });
        </pre>
        <ul>
          <li><code>&lt;button&gt;</code>: Crea un botó clicable.</li>
          <li><code>document.querySelector('button')</code>: Troba l'element del botó.</li>
          <li><code>addEventListener('click')</code>: Executa codi quan es fa clic.</li>
        </ul>
      `,
    example: `
  <button>Fes clic</button>
  document.querySelector('button').addEventListener('click', function() {
    alert('Botó clicat!');
  });
      `,
    instruction: "Afegeix un <code>&lt;button&gt;</code> amb el text 'Fes clic' i mostra un avís quan es faci clic.",
    check: () =>
      /<button>\s*Fes clic\s*<\/button>/i.test(htmlCode.value) &&
      /document\.querySelector\(['"]button['"]\)\.addEventListener\(['"]click['"]\s*,\s*function\s*\(\)\s*{\s*alert\(['"]Botó clicat!['"]\);?\s*}\s*\)/i.test(jsCode.value)
  },
  {
    title: "Utilitza Variables a JavaScript",
    explanation: `
          <p>Les variables emmagatzemen informació que pots utilitzar més endavant al teu codi. Pensa en una variable com una capsa amb etiqueta on pots guardar dades.</p>
          
          <h4>🚀 Passos per Crear i Utilitzar una Variable:</h4>
          <ol>
            <li>Utilitza <code>let</code> per crear una variable.</li>
            <li>Dóna-li un nom (ex.: <code>nomUsuari</code>).</li>
            <li>Assigna-li un valor (el teu nom) utilitzant <code>=</code>.</li>
            <li>Utilitza <code>alert()</code> per mostrar un missatge amb la variable.</li>
          </ol>
  
          <h4>🔍 Exemple de Codi:</h4>
          <pre>
  let nomUsuari = 'Anna';  // Pas 1: Crea una variable i assigna-hi el teu nom
  alert('Hola, ' + nomUsuari + '!');  // Pas 2: Mostra un missatge de salutació
          </pre>
  
          <h4>💡 Explicació:</h4>
          <ul>
            <li><code>let nomUsuari = 'Anna';</code>: 
              - <span class="keyword">let</span>: Paraula clau per declarar una variable.  
              - <span class="variable">nomUsuari</span>: El nom de la teva variable.  
              - <span class="operator">=</span>: Assigna el valor.  
              - <span class="string">'Anna'</span>: El valor (el teu nom).</li>
            <li><code>alert('Hola, ' + nomUsuari + '!');</code>:  
              - <span class="method">alert()</span>: Mostra un missatge emergent.  
              - <span class="operator">'Hola, ' + nomUsuari + '!'</span>: Combina text amb el valor de la variable.  
              - Resultat: <strong>Hola, Anna!</strong></li>
          </ul>
  
          <h4>✅ Exemple Correcte:</h4>
          <pre>
  let nomUsuari = 'Joan';
  alert('Hola, ' + nomUsuari + '!');
          </pre>
  
          <h4>⚠️ Errors Comuns:</h4>
          <ul>
            <li><code>let nomUsuari = Joan;</code> ❌ (Falten les cometes al voltant del nom)</li>
            <li><code>alert('Hola, nomUsuari!');</code> ❌ (Cal utilitzar la variable sense cometes)</li>
            <li><code>nomUsuari = 'Joan';</code> ❌ (Necessita <code>let</code> quan es declara per primera vegada)</li>
          </ul>
        `,
    example: `
  let nomUsuari = 'Anna';
  alert('Hola, ' + nomUsuari + '!');
      `,
    instruction: `
          Crea una variable anomenada <code>nomUsuari</code> amb el teu nom i utilitza <code>alert()</code> per mostrar el missatge:  
          <strong>Hola, [el teu nom]!</strong>
        `,
    correction: `
          <strong>Correcció:</strong> Assegura’t d’utilitzar aquesta estructura:
          <pre>
  let nomUsuari = 'ElTeuNom';
  alert('Hola, ' + nomUsuari + '!');
          </pre>
          🔔 No oblidis les cometes al voltant del teu nom i els signes més (+) per combinar el text!
        `,
    check: () => {
      const code = jsCode.value.trim();
  
      // Expressió regular flexible per acceptar variacions com cometes simples/dobles, espais i ús correcte de variables
      const regex = /let\s+nomUsuari\s*=\s*['"][\w\s]+['"]\s*;\s*alert\s*\(\s*['"]Hola,\s*['"]\s*\+\s*nomUsuari\s*\+\s*['"]!['"]\s*\)\s*;?/i;
  
      return regex.test(code);
    }
  },
  











  {
    title: "Canvia el Color d'un Subtítol en fer Clic",
    explanation: `
          <p>En aquesta lliçó, aprendràs a crear una funció en JavaScript que canvia el color d'un element <code>&lt;h2&gt;</code> quan hi fas clic!</p>
  
          <h4>🚀 Passos per Aconseguir-ho:</h4>
          <ol>
            <li>Crea una funció anomenada <code>canviaColor</code>.</li>
            <li>Dins de la funció, selecciona l'element <code>&lt;h2&gt;</code> utilitzant <code>document.querySelector()</code>.</li>
            <li>Utilitza la propietat <code>style.color</code> per canviar-ne el color.</li>
            <li>Afegeix un esdeveniment de clic a l'<code>&lt;h2&gt;</code> que executi la funció.</li>
          </ol>
  
          <h4>🔍 Exemple de Codi:</h4>
          <pre>
  <h2>Fes clic per canviar el meu color!</h2>
  
  function canviaColor() {
    document.querySelector('h2').style.color = 'blau';  // Canvia el color de l'h2 a blau
  }
  
  document.querySelector('h2').addEventListener('click', canviaColor);  // Executa la funció en fer clic
          </pre>
  
          <h4>💡 Explicació:</h4>
          <ul>
            <li><code>function canviaColor() { ... }</code>: Defineix una funció anomenada <code>canviaColor</code>.</li>
            <li><code>document.querySelector('h2')</code>: Selecciona el primer element <code>&lt;h2&gt;</code>.</li>
            <li><code>.style.color = 'blau';</code>: Canvia el color del text de l'<code>&lt;h2&gt;</code> a blau.</li>
            <li><code>addEventListener('click', canviaColor)</code>: Escolta el clic a l'<code>&lt;h2&gt;</code> i executa <code>canviaColor</code> quan es fa clic.</li>
          </ul>
  
          <h4>✅ Exemple Correcte de Solució:</h4>
          <pre>
  <h2>Fes clic!</h2>
  
  function canviaColor() {
    document.querySelector('h2').style.color = 'verd';
  }
  
  document.querySelector('h2').addEventListener('click', canviaColor);
          </pre>
  
          <h4>⚠️ Errors Comuns:</h4>
          <ul>
            <li>Oblidar seleccionar l'<code>&lt;h2&gt;</code>: Cal utilitzar <code>document.querySelector('h2')</code>.</li>
            <li>No afegir l'esdeveniment de clic, fent que no passi res en fer clic.</li>
            <li>Escriure malament <code>addEventListener</code> (no es permeten errors tipogràfics!).</li>
            <li>Utilitzar <code>style.color = blau;</code> sense cometes al voltant del nom del color.</li>
          </ul>
        `,
    example: `
  <h2>Fes clic per canviar el meu color!</h2>
  
  function canviaColor() {
    document.querySelector('h2').style.color = 'blau';
  }
  
  document.querySelector('h2').addEventListener('click', canviaColor);
      `,
    instruction: `
          Crea una funció anomenada <code>canviaColor</code> que canviï el color de l'<code>&lt;h2&gt;</code> a <strong>verd</strong> quan es faci clic.
        `,
    correction: `
          <strong>Correcció:</strong> Assegura’t que el teu codi sigui així:
          <pre>
  <h2>Fes clic!</h2>
  
  function canviaColor() {
    document.querySelector('h2').style.color = 'verd';
  }
  
  document.querySelector('h2').addEventListener('click', canviaColor);
          </pre>
          🔔 Recorda:
          - Utilitza cometes al voltant del nom del color: <code>'verd'</code>.  
          - Afegeix l'esdeveniment de clic perquè la funció s'executi quan es faci clic a l'<code>&lt;h2&gt;</code>.
        `,
    check: () => {
      const html = htmlCode.value.trim();
      const js = jsCode.value.trim();
  
      const h2Existeix = /<h2>.*<\/h2>/i.test(html);  // Comprova si existeix l'<h2>
      const funcioExisteix = /function\s+canviaColor\s*\(\)\s*{[^}]*}/i.test(js);  // Comprova si la funció canviaColor està definida
      const canviColor = /\.querySelector\(['"]h2['"]\)\.style\.color\s*=\s*['"]verd['"]\s*;?/i.test(js);  // Comprova si es canvia el color a verd
      const esdevenimentClic = /\.querySelector\(['"]h2['"]\)\.addEventListener\(['"]click['"]\s*,\s*canviaColor\s*\)/i.test(js);  // Comprova l'esdeveniment de clic
  
      return h2Existeix && funcioExisteix && canviColor && esdevenimentClic;
    }
  },
  

];


let currentLesson = 0;

function updateLesson() {
  const lesson = lessons[currentLesson];
  lessonNumber.textContent = currentLesson + 1;
  lessonTitle.textContent = lesson.title;
  lessonInstruction.innerHTML = lesson.instruction;
  lessonExplanation.innerHTML = lesson.explanation;
  lessonExample.innerHTML = lesson.example;
  updatePreview();
}

function updatePreview() {
  const combinedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Preview</title>
  <style>${cssCode.value}</style>
</head>
<body>
  ${htmlCode.value}
  <script>${jsCode.value}<\/script>
</body>
</html>
  `;
  const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(combinedCode);
  iframeDoc.close();
}

checkCodeButton.addEventListener('click', () => {
  const lesson = lessons[currentLesson];
  if (lesson.check()) {
    alert('✅ Great job!');

    if (currentLesson < lessons.length - 1) {
      currentLesson++;
      updateLesson();
    } else {
      alert('🎉 You completed all lessons!');
    }
  } else {
    alert('⚠️ Not quite right. Check your code and try again.');
  }
});

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);

updateLesson();












