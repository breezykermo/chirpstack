use anyhow::Result;
use tracing::info;

use crate::gateway;
use crate::{adr, api, backend, downlink, integration, region, storage};

pub async fn run() -> Result<()> {
    info!(
        version = env!("CARGO_PKG_VERSION"),
        docs = "https://www.chirpstack.io/",
        "Starting ChirpStack LoRaWAN Network Server"
    );

    region::setup()?;
    backend::joinserver::setup()?;
    adr::setup().await?;
    integration::setup().await?;
    gateway::backend::setup().await?;
    storage::setup().await?;
    downlink::setup().await;
    api::setup().await?;

    Ok(())
}
