use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("EUI64 expects exactly 8 bytes")]
    Eui64Length,

    #[error("AES128Key expects exactly 16 bytes")]
    Aes128Length,

    #[error("DevAddr expects exactly 4 bytes")]
    DevAddrLength,

    #[error(transparent)]
    FromHexError(#[from] hex::FromHexError),
}
