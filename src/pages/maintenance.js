import Head from 'next/head';

const Maintenance = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            textAlign: 'center'
        }}>
            <Head>
                <title>Maintenance</title>
            </Head>
            <h1>Site en Maintenance</h1>
            <p>Nous reviendrons bientôt. Merci pour votre patience.</p>
        </div>
    );
};

export default Maintenance;
