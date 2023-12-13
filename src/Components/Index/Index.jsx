// CSS
import './Index.css';
// Components
import BaseLayout from '../Generals/Layout/Layout';
// IMGs
import visualization from './img/Paguina de visualizacion.svg'
import creacion from './img/Paguina de Creacion.svg'


export default function Index() {
    // <script async data-uid="d2fc8e1c87" src="https://simpledoc.ck.page/d2fc8e1c87/index.js"></script>
    return (
        <BaseLayout>
            <div className="Index">
                <div className='header'>
                    <h1>
                        Quick and <span> effortless </span> documentation.
                    </h1>
                    <p>
                        SimpleDoc simplifies the process of writing your API documentation, so you can publish it as quickly as possible.
                    </p>
                    <button>
                        Join the waiting list.
                    </button>
                </div>

                <script async data-uid="d2fc8e1c87" src="https://simpledoc.ck.page/d2fc8e1c87/index.js"></script>

                <div className='feature'>
                    <div className='text'>
                        <p>Writing feature</p>
                        <h1>Write <span>easy</span> and build fast</h1>
                        <p>Publish your documentation on the web and share it with two clicks</p>
                    </div>
                    <div className='img'>
                        <img src={creacion} alt="" />
                    </div>
                </div>

                <div className='feature'>
                    <div className='text'>
                        <p>Sharing feature</p>
                        <h1>Public for <span>everyone</span> in seconts</h1>
                        <p>Publish your documentation on the web and share it with two clicks</p>
                    </div>
                    <div className='img'>
                        <img src={visualization} alt="" />
                    </div>
                </div>
            </div>
        </BaseLayout>

    );
}
