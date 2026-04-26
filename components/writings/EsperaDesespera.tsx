import React from 'react';
import { Link } from 'react-router-dom';

const EsperaDesespera: React.FC = () => {
  return (
    <article className="prose prose-gray max-w-none">
      <Link
        to="/escritos"
        className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#FF8A8A] transition-colors no-underline"
      >
        ← Volver
      </Link>

      <h1 className="text-4xl md:text-5xl elegant-font font-semibold tracking-tight mt-8 mb-2">
        LA ESPERA DESESPERA.
      </h1>
      <h2 className="text-2xl md:text-2xl text-gray-500 font-normal mt-0 mb-6">
        El discurso capitalista y sus efectos
      </h2>

      <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 border-b border-gray-200 pb-6">
        <span>Fiorella Belén Pedrós</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>Lic. en Psicología</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>Agosto de 2024</span>
      </div>

      <img
        src="/espera_desespera.png"
        alt="La espera desespera"
        className="w-3/4 mx-auto rounded-lg mb-12"
      />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p className="indent-8">
          Artefactos tecnológicos para mitigar el aburrimiento, objetos comercializables con la promesa de alcanzar la
          felicidad, medicamentos de acción inmediata para acabar con el malestar.
        </p>

        <p className="indent-8">
          Un click para llamar o mandar un mensaje. Un click para mirar una película. Un click para comprar lo que se
          te ocurra. Solo basta un simple click.
        </p>

        <p className="indent-8">
          Así es el hoy, pero ¿tenemos la vida más fácil o todo eso que se facilita complejiza otras cuestiones?
        </p>

        <p className="indent-8">
          Que un analista no puede ser ajeno a su época es una frase harto conocida. Por lo cual, la lógica de la{' '}
          <strong className="font-semibold text-gray-900">inmediatez</strong> en la que nos encontramos inmersos – de
          manera tal que acaba envolviéndonos y haciéndonos cómplices de ella- no es algo que deba pasarnos
          desapercibido.
        </p>

        <p className="indent-8">
          El clima de la época actual, que cuenta con sus propias coordenadas, que produce sus marcas particulares y
          que posee un característico modo de funcionamiento, conduce a interrogarnos qué incidencias podría producir
          en la constitución subjetiva de los niños.
        </p>

        <p className="indent-8">
          Para ello se propone un recorrido que parta de situar las condiciones epocales, donde no se puede prescindir
          de la referencia a la noción de{' '}
          <strong className="font-semibold text-gray-900">discurso</strong>, para arribar al discurso capitalista
          –propuesto por Lacan-, focalizando en el lazo social que se establece en el mismo.
        </p>

        <p className="indent-8">
          Esto permitirá plantear en qué lugar quedan ubicados los otros, como semejantes y como vínculos
          significativos del infante que se encuentra constituyendo su subjetividad. Focalizando en una cuestión nodal,
          que parece estar relegada en estos tiempos, y corresponde a la{' '}
          <strong className="font-semibold text-gray-900">espera</strong>.
        </p>

        <p className="indent-8">
          <strong className="font-semibold text-gray-900">Bauman</strong> (2006), asegura que la sociedad moderna
          líquida en la que vivimos hoy en día es esa en la que las condiciones de actuación de los miembros cambian
          antes de que las formas de actuar se consoliden como hábitos o rutinas determinadas. De modo que, la vida
          líquida supone una vida precaria, con condiciones de incertidumbre constante, convirtiéndose en una vida
          devoradora. Esto debido al hecho de que se le asigna al mundo y a todos sus fragmentos, animados como
          inanimados, el papel de{' '}
          <strong className="font-semibold text-gray-900">objetos de consumo</strong>. Los cuales pierden su utilidad
          en el transcurso mismo de ser usados.
        </p>

        <p className="indent-8">
          Lo fundamental, lo importante y lo ideal pasa a ser lo que es útil, lo que sirve, lo eficiente, lo
          funcional. Mientras que lo que no cumple con esas características, debe ser desechado. Lo perjudicial es que
          esto no aplica únicamente para los objetos o artefactos, sino también para los sujetos y los vínculos.
        </p>

        <p className="indent-8">
          ¿Cómo se establece el vínculo con los otros? ¿Qué lugar para ello? ¿Qué características posee? Resulta
          preciso, en este punto, situar el{' '}
          <strong className="font-semibold text-gray-900">lazo social</strong>, en tanto este mismo concierne a aquello
          que permite hacer vínculo con el otro. El lazo social supone un conjunto abierto de intercambios, donde cada
          quien entra en el juego del lazo como significante y lo que se hace con eso puede tener efectos. Partiendo de
          que el significante es lo que representa a un sujeto para otro significante (Lacan, 1972).
        </p>

        <p className="indent-8">
          El lazo social no puede abordarse sin hacer referencia a la noción de discurso y, por ende, a lo que{' '}
          <strong className="font-semibold text-gray-900">Lacan</strong> plantea sobre ello. Un discurso es lo que en
          el ordenamiento de lo que se produce por la existencia del lenguaje, hace función de lazo social (Lacan,
          1972). Al ser concebido como una estructura no se reduce a la palabra, sino que la excede, va más allá de
          ella.
        </p>

        <p className="indent-8">
          Se trata de una organización principalmente del lenguaje, específica de las relaciones del sujeto con los
          significantes y con el objeto, que reglan las formas del lazo social (Chemama, 1996). Esta organización
          supone una estructura donde las relaciones que se establecen y el orden interno que posee, dan lugar a una
          modalidad de lazo. Por ello, discurso y lazo social conllevan una imbricación.
        </p>

        <p className="indent-8">
          A los cuatro discursos que propone Lacan, se va a sumar un quinto; el{' '}
          <strong className="font-semibold text-gray-900">discurso capitalista</strong>. A éste lo plantea como algo
          locamente astuto; lo más astuto que se ha hecho como discurso. Sin embargo, eso no lo protege, en el sentido
          de que no está menos consagrado a reventar, siendo insostenible (Lacan, 1972). Es un discurso en el que el
          sujeto se encuentra a la vez sujeto a su objeto, en posición de creerse no sujetado a nada, amo de las
          palabras y las cosas (Chemama, 1996).
        </p>

        <p className="indent-8">
          Lo que expone <strong className="font-semibold text-gray-900">Peusner</strong> (s.f.) es que a este discurso
          lo venden para que lo consumamos, y así se consume hasta su consunción. Pasa que, ahora hay un posible
          contacto con la verdad; desde el lugar de donde se maneja el discurso, hay acceso a la verdad. En esta
          lógica hay verdad-toda, hay verdad a la que se puede acceder.
        </p>

        <p className="indent-8">
          Por lo cual, si la verdad es toda, cuando aparece produce un efecto devastador sobre el sujeto. Es posible
          afirmar que esto no es sin consecuencias ya que, como sostiene este autor, si ahora tenemos acceso directo a
          la verdad, el{' '}
          <strong className="font-semibold text-gray-900">Otro ya no existe</strong> y nos invade la soledad, que es el
          sentimiento contemporáneo. Hoy, todo el mundo se siente solo.
        </p>

        <p className="indent-8">
          Esa última oración resulta sumamente significativa ya que en una época donde los artefactos tecnológicos nos
          permiten estar en contacto, ver y hablar con cientos de personas, a kilómetros de distancia, en cualquier
          momento, predomina la soledad. Terminamos acercados a los que tenemos lejos y aislados, distanciados,
          desconectados de los que tenemos más cerca.
        </p>

        <p className="indent-8">
          ¿Qué ocurre, en esta lógica, con los niños en proceso de constitución? Como expone{' '}
          <strong className="font-semibold text-gray-900">Dimang</strong> (2020), en aquel tiempo instituyente para el
          sujeto, el discurso capitalista tiene incidencias estragantes, donde más que anudar, desanudan. Apareciendo
          niños en los que algo del{' '}
          <strong className="font-semibold text-gray-900">borde pulsional</strong> no se ha constituido, frente a lo
          cual se puede interrogar qué podría llegar a hacer borde frente al desborde, cuando el discurso capitalista
          empuja a gozar, cuando no hay un significante que organice.
        </p>

        <p className="indent-8">
          La figura de autoridad y el lugar de los padres queda en una posición particular. Se hace presente y patente
          un vínculo de paridad, prima la no asimetría entre padres e hijos, se desdibuja el lugar de la autoridad. El
          saber parental queda relegado, siendo reemplazado por el saber médico o el saber de los mercados. El hijo se
          vuelve extraño.
        </p>

        <p className="indent-8">
          ¿Qué pueden hacer los otros adultos para sostener, acompañar o acotar los momentos de desborde de los
          niños? ¿Qué tiempo para eso, cuando lo que se busca es que sea todo ya? La inmediatez reina, la espera se
          vuelve insostenible, agobiante.
        </p>

        <p className="indent-8">
          Esto lleva a hacer referencia al planteo freudiano acerca de dos principios del aparato psíquico. El{' '}
          <strong className="font-semibold text-gray-900">principio de placer</strong>, tal como lo describía{' '}
          <strong className="font-semibold text-gray-900">Freud</strong> (1911), tiene como característica la búsqueda
          de satisfacción inmediata. Frente a un aumento de tensión, que es sentido en el aparato como displacer, busca
          disminuir el mismo para lograr el placer, la satisfacción. Esta búsqueda inmediata llevaría a que se
          encuentre la satisfacción al modo de alucinación. Este principio regiría en el aparato en el comienzo del
          sujeto, pero se vuelve incompatible con la vida; el niño puede alucinar estar succionando el pecho materno,
          pero esto no calmará su necesidad de hambre.
        </p>

        <p className="indent-8">
          Frente a esta situación debe advenir otro principio que, por medio de rodeos, ya no busque una satisfacción
          inmediata sino una satisfacción duradera y acorde con la vida. La introducción de este{' '}
          <strong className="font-semibold text-gray-900">principio de realidad</strong> imprime una serie de
          modificaciones en el aparato psíquico, uno de ellos tiene que ver con el pensamiento y la espera, lo cual
          supone soportar el incremento de tensión mientras se aplaza la descarga.
        </p>

        <p className="indent-8">
          Estos planteos freudianos se introducen ya que, considerando las coordenadas de la época y el modo de
          funcionamiento que impulsa el discurso capitalista, se vuelve una cuestión esencial interrogar qué ocurre con
          el principio de realidad, con la búsqueda de satisfacción mediante rodeos, suponiendo que esto requiere de un
          tiempo y una espera.
        </p>

        <p className="indent-8">
          Parece ser que en el ahora, el principio de realidad es el que queda relegado, primando el principio de
          placer.{' '}
          <strong className="font-semibold text-gray-900">La espera se vuelve algo que desespera.</strong>
        </p>

        <p className="indent-8">
          Todo lo expuesto reviste tal interés y actualidad que requeriría un abordaje más extenso y profundo, por lo
          cual lo que se fue exponiendo son esbozos de una investigación que continuará abierta. En tanto la clínica
          psicoanalítica no se ve desprovista de todo ello, muchas problemáticas y sufrimiento infantil llevan la marca
          de la época y del discurso capitalista.
        </p>

        <p className="indent-8">
          Como también el encuentro con la inmediatez; las consultas se vuelven demandas de soluciones inmediatas. Y es
          ahí donde nos dirigimos contra la corriente. Como plantea Peusner (2018) el análisis lleva tiempo, a veces el
          tiempo se extiende demasiado, al menos en relación con el apuro que nuestra cultura occidental capitalista
          considera lógico para obtener resultados positivos y efectividad.
        </p>

        <p className="indent-8">
          Adicionando a esto, las palabras de <strong className="font-semibold text-gray-900">Calmels</strong> (2019)
          recalcan que producir temporalidad es darle espesor, densidad, al transcurrir de las acciones, intervención
          que se presenta como una resistencia al aceleramiento.
        </p>
      </div>

      {/* References */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Referencias bibliográficas</h3>
        <ul className="space-y-3 text-sm text-gray-600 list-none pl-0">
          <li className="pl-8 -indent-8">
            Bauman, Z. (2006). <em>Vida líquida</em>. Paidós Ibérica, Barcelona.
          </li>
          <li className="pl-8 -indent-8">
            Calmels, D. (2019). <em>Infancias del cuerpo</em>. Editorial Biblos, Buenos Aires.
          </li>
          <li className="pl-8 -indent-8">
            Chemama, R. (1996). Discurso. En <em>Diccionario del Psicoanálisis</em>. Amorrortu Editores, Argentina.
          </li>
          <li className="pl-8 -indent-8">
            Dimang, S. (2020). Efectos del discurso capitalista en la constitución subjetiva. Incidencias en la clínica
            con niños y adolescentes. <em>FORT-DA Revista de Psicoanálisis con niños</em>, N° 14, noviembre de 2020.
          </li>
          <li className="pl-8 -indent-8">
            Freud, S. (1911). Los dos principios del funcionamiento mental. En{' '}
            <em>Sigmund Freud. Obras completas</em>. (2ª ed., Vol. 12). Siglo Veintiuno Editores.
          </li>
          <li className="pl-8 -indent-8">
            Lacan, J. (1972). Del discurso psicoanalítico. Conferencia en Milán. Università degli studi, Milán.
          </li>
          <li className="pl-8 -indent-8">
            Peusner, P. (2018). <em>El psicoanálisis con niños es un chino</em>. Letra Viva, Buenos Aires.
          </li>
          <li className="pl-8 -indent-8">
            Peusner, P. (s.f.). <em>El niño y el Otro. Pertinencia de los cuatro discursos en la clínica
            psicoanalítica lacaniana con niños</em>. Letra Viva, Buenos Aires.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default EsperaDesespera;
