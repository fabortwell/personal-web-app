import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient ({
    projectId: 'process.env.REACT_APP__SANITY_PROJECT_ID',
    dataset: 'production',
    apiVersion: '2023-22-01',
    useCdn: true,
    token: 'sk3Yf9IDNOMzvN2r9bjvtmMC0d2VR2o7Ld39Ugf1dzybAWaQziLfZR17IgMMLoqOA6K7ILSHu1MDeMKQNbOocebsvXsSmp5ei6LzJejpy09INme9oggZiPrvXteOhtuAmHrn29uW4uij8wBBhijdwkvn6xbV6UdpDVOSXp4bJPPsV2l8fWW8',
});