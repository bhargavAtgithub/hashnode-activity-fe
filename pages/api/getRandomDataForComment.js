import hello from '../../services/app/hello';

export default async function handler(req, res) {
  const baseUrl = `http://metaphorpsum.com`;
  try {
    const randomCommentResponse = await hello({
      method: 'GET',
      externalUrl: baseUrl + '/sentences/1',
    });

    if (randomCommentResponse instanceof Error) {
      throw 'Random data fetch error';
    }

    return res.json({ randomCommentResponse });
  } catch (error) {
    return res.status(500).send('Error getting data');
  }
}
