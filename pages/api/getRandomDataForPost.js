import hello from '../../services/app/hello';

export default async function handler(req, res) {
  const baseUrl = `http://metaphorpsum.com`;
  try {
    const [randomTitleResponse, randomPostResponse] = await Promise.all([
      hello({
        method: 'GET',
        externalUrl: baseUrl + '/sentences/1',
      }),
      hello({
        method: 'GET',
        externalUrl: baseUrl + '/paragraphs/5',
      }),
    ]);

    if (
      randomTitleResponse instanceof Error ||
      randomPostResponse instanceof Error
    ) {
      throw 'Random data fetch error';
    }

    return res.json({ randomTitleResponse, randomPostResponse });
  } catch (error) {
    return res.status(500).send('Error getting data');
  }
}
