export type OntologyMetadataObject = {
  code: string;
  slug: string;
  title?: string;
  entry_version: string;
  updated_at: string;
};

export type PublicChangelogEntry = {
  date: string;
  ontology_release: string;
  object_code: string;
  object_slug: string;
  object_type: string;
  entry_version: string;
  change_type: string;
  public_summary: string;
  receipt_impact: string;
};

export type PublicChangelog = {
  version: number;
  entries: PublicChangelogEntry[];
};

export function getObjectHistory(
  changelog: PublicChangelog,
  object: OntologyMetadataObject,
  limit = 5
) {
  return changelog.entries
    .filter((entry) => entry.object_code === object.code)
    .sort((a, b) => {
      const dateCompare = b.date.localeCompare(a.date);

      if (dateCompare !== 0) {
        return dateCompare;
      }

      return b.entry_version.localeCompare(a.entry_version);
    })
    .slice(0, limit);
}

export function getVersionLabel(object: OntologyMetadataObject) {
  return `${object.code}@${object.entry_version}`;
}

export function getChangeTypeLabel(changeType: string) {
  const labels: Record<string, string> = {
    created: "Created",
    expanded: "Expanded",
    clarified: "Clarified",
    renamed: "Renamed",
    moved: "Moved",
    split: "Split",
    merged: "Merged",
    deprecated: "Deprecated",
    superseded: "Superseded",
    semantic_revision: "Semantic revision",
  };

  return labels[changeType] ?? changeType;
}

export function getReceiptImpactLabel(receiptImpact: string) {
  const labels: Record<string, string> = {
    none: "None",
    minor: "Minor",
    review_recommended: "Review recommended",
    breaking: "Breaking",
  };

  return labels[receiptImpact] ?? receiptImpact;
}
